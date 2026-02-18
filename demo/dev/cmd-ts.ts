import * as c from "cmd-ts";
import { createVercelFormatter, vercelFormatter } from "cmd-ts/dist/esm/batteries/vercel-formatter";

import * as pkg from "../../package.json";

// Counter type for --verbose: counts how many times the flag was passed.
// cmd-ts does not have a built-in counter; we use multiflag with a custom Type.
const verboseCountType: c.Type<boolean[], number> = {
  from: async (bools) => bools.length,
  description: "count",
  displayName: "count",
};

// Global flags - on every command.
const globalFlags = {
  verbose: c.multiflag({
    type: verboseCountType,
    long: "verbose",
    short: "V",
    description: "Increase log verbosity. Can be specified up to 3 times, e.g. -VVV.",
  }),
  config: c.option({
    type: c.optional(c.string),
    long: "config",
    // Note: cmd-ts does not support metavar hints for named options.
    description: "Path to config file, to override the default.",
  }),
};

// Scope flags - on commands that locate local clones.
// Note: cmd-ts does not support command grouping in help output.
const scopeFlags = {
  os: c.option({
    type: c.optional(c.string),
    long: "os",
    description: "Narrow scope to a specific OS. Accepts: windows, wsl.",
  }),
  windows: c.flag({
    type: c.boolean,
    long: "windows",
    description: "Shorthand for --os windows.",
  }),
  wsl: c.flag({
    type: c.boolean,
    long: "wsl",
    description: "Shorthand for --os wsl.",
  }),
  local: c.flag({
    type: c.boolean,
    long: "local",
    description: "Scope to the current OS (e.g. --os windows when running in PowerShell).",
  }),
  all: c.flag({
    type: c.boolean,
    long: "all",
    short: "a",
    description: "Expand scope to both OSes, even when the default would be --local.",
  }),
  root: c.option({
    type: c.optional(c.string),
    long: "root",
    description:
      "Scope to a single named root directory when multiple roots are configured on one OS.",
  }),
};

// Repo positionals — for commands that accept [org] <repo>.
const repoArgs = {
  org: c.positional({
    type: c.optional(c.string),
    displayName: "ORG",
    description: "GitHub org or user",
  }),
  repo: c.positional({
    type: c.string,
    displayName: "REPO",
    description: "Repository name",
  }),
};

const cdCommand = c.command({
  name: "cd",
  description:
    "cd into dev directory root, or into a specific project directory. " +
    "Defaults to the dev directory root of the same host (Windows or WSL). " +
    "Pass [ORG] and REPO to cd into a specific project directory instead. " +
    "(Note: actually changing the working directory requires shell integration.)",
  args: { ...globalFlags, ...scopeFlags, ...repoArgs },
  handler(_args) {},
});

const shellCommand = c.command({
  name: "shell",
  description:
    "Launch a new shell in a dev directory. " +
    "Equivalent to 'dev cd', but instead of requiring shell integration to change the working directory " +
    "it launches a new shell process in the target directory (and on the target OS, if different from the current one). " +
    "Pass [ORG] and REPO to target a specific project directory.",
  args: { ...globalFlags, ...scopeFlags, ...repoArgs },
  handler(_args) {},
});

const lsCommand = c.command({
  name: "ls",
  description:
    "List paths to all local clones. " +
    "By default lists clones on both WSL and Windows. " +
    "Use --os / --windows / --wsl / --local to narrow by OS. " +
    "Use --format to control whether paths are printed in Windows or WSL format.",
  args: {
    ...globalFlags,
    ...scopeFlags,
    format: c.option({
      type: c.optional(c.string),
      long: "format",
      description: "Print paths in the given host's format. Accepts: windows, wsl.",
    }),
  },
  handler(_args) {},
});

const findCommand = c.command({
  name: "find",
  description:
    "List full paths to local clones matching the given name criteria. " +
    "Searches all configured root directories (on both OSes by default) for clones " +
    "whose org and/or repo name match the provided arguments.",
  args: { ...globalFlags, ...scopeFlags, ...repoArgs },
  handler(_args) {},
});

const editCommand = c.command({
  name: "edit",
  // "code" is a supported alias for "edit"
  aliases: ["code"],
  description:
    "Open a project in VSCode (or another configured editor). " +
    "Locates the project directory matching [ORG] and REPO and opens it in the configured editor (defaults to VSCode). " +
    "Use --editor to override the editor for this invocation. " +
    "'dev code' is an alias for 'dev edit'.",
  args: {
    ...globalFlags,
    ...scopeFlags,
    ...repoArgs,
    editor: c.option({
      type: c.optional(c.string),
      long: "editor",
      description:
        "Override the IDE or code editor to launch. Alternative editors are configured by name in the config file.",
    }),
  },
  handler(_args) {},
});

const cloneCommand = c.command({
  name: "clone",
  description:
    "Clone a GitHub repo into the canonical location in the dev directory. " +
    "Fails if a clone already exists on either OS (WSL or Windows) to avoid accidental duplication. " +
    "Pass --dupe to skip this cross-OS check and explicitly allow a duplicate.",
  args: {
    ...globalFlags,
    ...scopeFlags,
    ...repoArgs,
    dupe: c.flag({
      type: c.boolean,
      long: "dupe",
      description:
        "Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.",
    }),
  },
  handler(_args) {},
});

const rootCommand = c.command({
  name: "root",
  description:
    "Show the root path(s) of the dev directory. " +
    "By default shows roots for both WSL and Windows. " +
    "Use --os / --windows / --wsl / --local to narrow by OS.",
  args: { ...globalFlags, ...scopeFlags },
  handler(_args) {},
});

const nestedSubcommands = c.subcommands({
  name: "nested",
  description: "Group of placeholder nested subcommands (included to test nesting).",
  cmds: {
    foo: c.command({
      name: "foo",
      description:
        "Placeholder nested subcommand foo. " +
        "Included to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.",
      args: { ...globalFlags },
      handler(_args) {},
    }),
    bar: c.command({
      name: "bar",
      description:
        "Placeholder nested subcommand bar. " +
        "Included to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.",
      args: { ...globalFlags },
      handler(_args) {},
    }),
  },
});

const doctorCommand = c.command({
  name: "doctor",
  description:
    "Confirm the environment is set up correctly. " +
    "Verifies that external dependencies (e.g. 'gh', 'git') are present in PATH. " +
    "Also checks that the 'dev' CLI is available on the peer OS (WSL ↔ Windows).",
  args: { ...globalFlags },
  handler(_args) {},
});

const devCli = c.subcommands({
  name: "dev",
  description: "My helper CLI for navigating git projects.",
  version: pkg.version,
  cmds: {
    cd: cdCommand,
    shell: shellCommand,
    ls: lsCommand,
    find: findCommand,
    edit: editCommand,
    clone: cloneCommand,
    root: rootCommand,
    nested: nestedSubcommands,
    doctor: doctorCommand,
  },
});
c.setDefaultHelpFormatter(vercelFormatter);
void c.run(devCli, process.argv.slice(2));
