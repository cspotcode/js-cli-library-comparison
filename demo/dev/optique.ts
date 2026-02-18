import {
  argument,
  choice,
  command,
  constant,
  group,
  map,
  merge,
  message,
  multiple,
  object,
  option,
  optional,
  or,
  string,
} from "@optique/core";
import { run } from "@optique/run";

import * as pkg from "../../package.json";

// Global flags - on every command.
// Note: optique has no built-in counter flag type; multiple() + map() simulates
// incrementing --verbose by counting how many times the flag is passed.
const globalFlags = group(
  "Global flags",
  object({
    verbose: map(
      multiple(
        option("-V", "--verbose", {
          description: message`Increase log verbosity. Can be specified up to 3 times, e.g. -VVV.`,
        }),
      ),
      (vals) => vals.length,
    ),
    config: option("--config", string({ metavar: "PATH" }), {
      description: message`Path to config file, to override the default.`,
    }),
  }),
);

// Scope flags - on commands that locate local clones.
const scopeFlags = group(
  "Scope flags",
  object({
    os: option("--os", choice(["windows", "wsl"] as const), {
      description: message`Narrow scope to a specific OS.`,
    }),
    windows: option("--windows", {
      description: message`Shorthand for --os windows.`,
    }),
    wsl: option("--wsl", {
      description: message`Shorthand for --os wsl.`,
    }),
    local: option("--local", {
      description: message`Scope to the current OS (e.g. --os windows when running in PowerShell).`,
    }),
    all: option("-a", "--all", {
      description: message`Expand scope to both OSes, even when the default would be --local.`,
    }),
    root: option("--root", string({ metavar: "NAME" }), {
      description: message`Scope to a single named root directory when multiple roots are configured on one OS.`,
    }),
  }),
);

// Repo positionals — for commands that accept [ORG] REPO.
const repoArgs = {
  org: optional(argument(string({ metavar: "ORG" }), { description: message`GitHub org or user` })),
  repo: argument(string({ metavar: "REPO" }), { description: message`Repository name` }),
};

// "edit" and "code" share the same parser.
// Note: optique does not support command aliases; "code" is a hidden duplicate
// of "edit" as a workaround.
const editParser = merge(
  scopeFlags,
  object({
    action: constant("edit"),
    ...repoArgs,
    editor: option("--editor", string(), {
      description: message`Override the IDE or code editor to launch. Alternative editors are configured by name in the config file.`,
    }),
  }),
);

const cdCommand = command(
  "cd",
  merge(object({ action: constant("cd"), ...repoArgs }), scopeFlags),
  {
    brief: message`cd into dev directory root, or into a specific project directory.`,
    description: message`cd into dev directory root, or into a specific project directory.

Defaults to the dev directory root of the same host (Windows or WSL).
Pass [ORG] and REPO to cd into a specific project directory instead.
(Note: actually changing the working directory requires shell integration.)`,
  },
);

const shellCommand = command(
  "shell",
  merge(object({ action: constant("shell"), ...repoArgs }), scopeFlags),
  {
    brief: message`Launch a new shell in a dev directory.`,
    description: message`Launch a new shell in a dev directory.

Equivalent to 'dev cd', but instead of requiring shell integration to change
the working directory it launches a new shell process in the target directory
(and on the target OS, if different from the current one).
Pass [ORG] and REPO to target a specific project directory.`,
  },
);

const lsCommand = command(
  "ls",
  merge(
    object({
      action: constant("ls"),
      format: group(
        "Output flags",
        option("--format", choice(["windows", "wsl"] as const), {
          description: message`Print paths in the given host's format.`,
        }),
      ),
    }),
    scopeFlags,
  ),
  {
    brief: message`List paths to all local clones.`,
    description: message`List paths to all local clones.

By default lists clones on both WSL and Windows.
Use --os / --windows / --wsl / --local to narrow by OS.
Use --format to control whether paths are printed in Windows or WSL format.`,
  },
);

const findCommand = command(
  "find",
  merge(object({ action: constant("find"), ...repoArgs }), scopeFlags),
  {
    brief: message`List full paths to local clones matching the given name criteria.`,
    description: message`List full paths to local clones matching the given name criteria.

Searches all configured root directories (on both OSes by default) for clones
whose org and/or repo name match the provided arguments.
Useful for scripting or quickly locating a project path without opening it.`,
  },
);

const editCommand = command("edit", editParser, {
  brief: message`Open a project in VSCode (or another configured editor).`,
  description: message`Open a project in VSCode (or another configured editor).

Locates the project directory matching [ORG] and REPO and opens it in the
configured editor (defaults to VSCode). Use --editor to override the editor
for this invocation. Alternative editor names are defined in the config file.
'dev code' is an alias for 'dev edit'.`,
});

const codeCommand = command("code", editParser, { hidden: true });

const cloneCommand = command(
  "clone",
  merge(
    object({
      action: constant("clone"),
      ...repoArgs,
      dupe: option("--dupe", {
        description: message`Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.`,
      }),
    }),
    scopeFlags,
  ),
  {
    brief: message`Clone a GitHub repo into the canonical location in the dev directory.`,
    description: message`Clone a GitHub repo into the canonical location in the dev directory.

Fails if a clone already exists on either OS (WSL or Windows) to avoid
accidental duplication. Pass --dupe to skip this cross-OS check and
explicitly allow a duplicate.`,
  },
);

const rootCommand = command("root", merge(object({ action: constant("root") }), scopeFlags), {
  brief: message`Show the root path(s) of the dev directory.`,
  description: message`Show the root path(s) of the dev directory.

Prints the configured dev directory root path(s).
By default shows roots for both WSL and Windows.
Use --os / --windows / --wsl / --local to narrow by OS.`,
});

const fooCommand = command("foo", object({ action: constant("foo") }), {
  brief: message`Placeholder nested subcommand foo.`,
  description: message`Placeholder nested subcommand foo.

Included to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.`,
});

const barCommand = command("bar", object({ action: constant("bar") }), {
  brief: message`Placeholder nested subcommand bar.`,
  description: message`Placeholder nested subcommand bar.

Included to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.`,
});

const nestedCommand = command("nested", or(fooCommand, barCommand), {
  brief: message`Placeholder nested subcommands.`,
  description: message`Group of placeholder nested subcommands included to test nesting behaviour.`,
});

const doctorCommand = command("doctor", object({ action: constant("doctor") }), {
  brief: message`Confirm the environment is set up correctly.`,
  description: message`Confirm the environment is set up correctly.

Verifies that external dependencies (e.g. 'gh', 'git') are present in PATH.
Also checks that the 'dev' CLI is available on the peer OS (WSL ↔ Windows).`,
});

const codeCommandGroup = group(
  "Code commands",
  or(
    cdCommand,
    shellCommand,
    lsCommand,
    findCommand,
    editCommand,
    codeCommand,
    cloneCommand,
    rootCommand,
    nestedCommand,
  ),
);

const diagnosticCommandGroup = group("Diagnostic commands", doctorCommand);

const cli = merge(globalFlags, or(codeCommandGroup, diagnosticCommandGroup));

const config = run(cli, {
  programName: "dev",
  brief: message`My helper CLI for navigating git projects.`,
  description: message`A helper CLI for navigating and managing git projects across WSL and Windows.`,
  help: "option",
  version: pkg.version,
  completion: {
    mode: "command",
    name: "singular",
    group: "Other",
  },
});
console.dir(config);
