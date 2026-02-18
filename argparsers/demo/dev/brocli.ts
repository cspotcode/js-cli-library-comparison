import { boolean, command, number, positional, run, string } from "@drizzle-team/brocli";

import * as pkg from "../../package.json";

// Global flags — on every command.
// Note: brocli does not have a counter flag type. `number` is used for
// --verbose so callers can write `--verbose 3`; stacking short flags (-VVV)
// is not supported.
const globalOptions = {
  verbose: number("verbose")
    .alias("V")
    .desc("Increase log verbosity. Pass a number up to 3, e.g. --verbose 3."),
  config: string("config").desc("Path to config file, to override the default."),
};

// Scope flags — on commands that locate local clones.
const scopeOptions = {
  os: string("os")
    .enum("windows", "wsl")
    .desc("Narrow scope to a specific OS. Accepts: windows, wsl."),
  windows: boolean("windows").desc("Shorthand for --os windows."),
  wsl: boolean("wsl").desc("Shorthand for --os wsl."),
  local: boolean("local").desc(
    "Scope to the current OS (e.g. --os windows when running in PowerShell).",
  ),
  all: boolean("all")
    .alias("a")
    .desc("Expand scope to both OSes, even when the default would be --local."),
  root: string("root").desc(
    "Scope to a single named root directory when multiple roots are configured on one OS.",
  ),
};

// Repo positionals — for commands that accept [org] <repo>.
const repoOptions = {
  org: positional("ORG").desc("GitHub org or user"),
  repo: positional("REPO").desc("Repository name"),
};

const cdCommand = command({
  name: "cd",
  desc: `cd into dev directory root, or into a specific project directory.

Defaults to the dev directory root of the same host (Windows or WSL).
Pass [ORG] and REPO to cd into a specific project directory instead.
Use --host to override which OS's directory to target.
(Note: actually changing the working directory requires shell integration.)`,
  shortDesc: "cd into dev directory root, or into a specific project directory.",
  options: {
    ...globalOptions,
    ...scopeOptions,
    ...repoOptions,
  },
  handler: (_opts) => {},
});

const shellCommand = command({
  name: "shell",
  desc: `Launch a new shell in a dev directory.

Equivalent to 'dev cd', but instead of requiring shell integration to change
the working directory it launches a new shell process in the target directory
(and on the target OS, if different from the current one).
Pass [ORG] and REPO to target a specific project directory.`,
  shortDesc: "Launch a new shell in a dev directory.",
  options: {
    ...globalOptions,
    ...scopeOptions,
    ...repoOptions,
  },
  handler: (_opts) => {},
});

const lsCommand = command({
  name: "ls",
  desc: `List paths to all local clones.

By default lists clones on both WSL and Windows.
Use --os / --windows / --wsl / --local to narrow by OS.
Use --format to control whether paths are printed in Windows or WSL format.`,
  shortDesc: "List paths to all local clones.",
  options: {
    ...globalOptions,
    ...scopeOptions,
    format: string("format")
      .enum("windows", "wsl")
      .desc("Print paths in the given host's format. Accepts: windows, wsl."),
  },
  handler: (_opts) => {},
});

const findCommand = command({
  name: "find",
  desc: `List full paths to local clones matching the given name criteria.

Searches all configured root directories (on both OSes by default) for clones
whose org and/or repo name match the provided arguments.
Useful for scripting or quickly locating a project path without opening it.`,
  shortDesc: "List full paths to local clones matching the given name criteria.",
  options: {
    ...globalOptions,
    ...scopeOptions,
    ...repoOptions,
  },
  handler: (_opts) => {},
});

const editCommand = command({
  name: "edit",
  // "code" is a supported alias for "edit"
  aliases: ["code"],
  desc: `Open a project in VSCode (or another configured editor).

Locates the project directory matching [ORG] and REPO and opens it in the
configured editor (defaults to VSCode). Use --editor to override the editor
for this invocation. Alternative editor names are defined in the config file.
'dev code' is an alias for 'dev edit'.`,
  shortDesc: "Open a project in VSCode (or another configured editor).",
  options: {
    ...globalOptions,
    ...scopeOptions,
    ...repoOptions,
    editor: string("editor").desc(
      "Override the IDE or code editor to launch. Alternatives are configured by name in the config file.",
    ),
  },
  handler: (_opts) => {},
});

const cloneCommand = command({
  name: "clone",
  desc: `Clone a GitHub repo into the canonical location in the dev directory.

Clones the given GitHub repository into the canonical location under the dev
directory root. Fails if a clone already exists on either OS (WSL or Windows)
to avoid accidental duplication across environments.
Pass --dupe to skip this cross-OS check and explicitly allow a duplicate.`,
  shortDesc: "Clone a GitHub repo into the canonical location in the dev directory.",
  options: {
    ...globalOptions,
    ...scopeOptions,
    ...repoOptions,
    dupe: boolean("dupe").desc(
      "Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.",
    ),
  },
  handler: (_opts) => {},
});

const rootCommand = command({
  name: "root",
  desc: `Show the root path(s) of the dev directory.

Prints the configured dev directory root path(s).
By default shows roots for both WSL and Windows.
Use --os / --windows / --wsl / --local to narrow by OS.`,
  shortDesc: "Show the root path(s) of the dev directory.",
  options: {
    ...globalOptions,
    ...scopeOptions,
  },
  handler: (_opts) => {},
});

const nestedCommand = command({
  name: "nested",
  desc: "Group of placeholder nested subcommands (included to test nesting).",
  shortDesc: "Placeholder nested subcommands.",
  subcommands: [
    command({
      name: "foo",
      desc: "Placeholder nested subcommand foo.\n\nIncluded to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.",
      shortDesc: "Placeholder nested subcommand foo.",
      options: { ...globalOptions },
      handler: (_opts) => {},
    }),
    command({
      name: "bar",
      desc: "Placeholder nested subcommand bar.\n\nIncluded to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.",
      shortDesc: "Placeholder nested subcommand bar.",
      options: { ...globalOptions },
      handler: (_opts) => {},
    }),
  ],
});

const doctorCommand = command({
  name: "doctor",
  desc: `Confirm the environment is set up correctly.

Verifies that external dependencies (e.g. 'gh', 'git') are present in PATH.
Also checks that the 'dev' CLI is available on the peer OS (WSL ↔ Windows).`,
  shortDesc: "Confirm the environment is set up correctly.",
  options: { ...globalOptions },
  handler: (_opts) => {},
});

// Note: brocli does not support command grouping (Code / Diagnostic) in help
// output; all commands are listed flat.
run(
  [
    cdCommand,
    shellCommand,
    lsCommand,
    findCommand,
    editCommand,
    cloneCommand,
    rootCommand,
    nestedCommand,
    doctorCommand,
  ],
  {
    name: "dev",
    description: "My helper CLI for navigating git projects.",
    version: pkg.version,
  },
);
