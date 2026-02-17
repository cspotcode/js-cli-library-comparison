import { Builtins, Cli, Command, Option } from "clipanion";

import * as pkg from "../package.json";

// Global flags, available on all commands
abstract class CommonCommand extends Command {
  verbose = Option.Counter("-V,--verbose", {
    description: "Increase log verbosity. Can be specified up to 3 times, e.g. -VVV.",
  });
  config = Option.String("--config", {
    // Note: clipanion does not support metavar hints for named options.
    description: "Path to config file, to override the default.",
  });
}

// Scope flags
abstract class ScopedCommand extends CommonCommand {
  os = Option.String("--os", {
    description: "Narrow scope to a specific OS. Accepts: windows, wsl.",
  });
  windows = Option.Boolean("--windows", {
    description: "Shorthand for --os windows.",
  });
  wsl = Option.Boolean("--wsl", {
    description: "Shorthand for --os wsl.",
  });
  local = Option.Boolean("--local", {
    description: "Scope to the current OS (e.g. --os windows when running in PowerShell).",
  });
  all = Option.Boolean("-a,--all", {
    description: "Expand scope to both OSes, even when the default would be --local.",
  });
  rootFlag = Option.String("--root", {
    description:
      "Scope to a single named root directory when multiple roots are configured on one OS.",
  });
}

const categories = {
  code: "Code",
  diagnostic: "Diagnostic",
} as const;

const repoOptions = {
  org: Option.String({ name: "ORG" }),
  repo: Option.String({ required: true, name: "REPO" }),
};

export class CdCommand extends ScopedCommand {
  static override paths = [["cd"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "cd into dev directory root, or into a specific project directory.",
    details: `\
Defaults to the dev directory root of the same host (Windows or WSL). \
Pass [ORG] and REPO to cd into a specific project directory instead. \
Use --host to override which OS's directory to target. \
(Note: actually changing the working directory requires shell integration.)`,
  });

  org = repoOptions.org;
  repo = repoOptions.repo;

  override async execute() {}
}

export class ShellCommand extends ScopedCommand {
  static override paths = [["shell"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Launch a new shell in a dev directory.",
    details: `\
Equivalent to \`dev cd\`, but instead of requiring shell integration to change \
the working directory it launches a new shell process in the target directory \
(and on the target OS, if different from the current one). \
Pass [ORG] and REPO to target a specific project directory.`,
  });

  org = repoOptions.org;
  repo = repoOptions.repo;

  override async execute() {}
}

export class LsCommand extends ScopedCommand {
  static override paths = [["ls"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "List paths to all local clones.",
    details: `\
By default lists clones on both WSL and Windows. \
Use --os / --windows / --wsl / --local to narrow by OS. \
Use --format to control whether paths are printed in Windows or WSL format.`,
  });

  format = Option.String("--format", {
    description: "Print paths in the given host's format. Accepts: windows, wsl.",
  });

  override async execute() {}
}

export class FindCommand extends ScopedCommand {
  static override paths = [["find"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "List full paths to local clones matching the given name criteria.",
    details: `\
Searches all configured root directories (on both OSes by default) for clones \
whose org and/or repo name match the provided arguments. \
Useful for scripting or quickly locating a project path without opening it.`,
  });

  org = repoOptions.org;
  repo = repoOptions.repo;

  override async execute() {}
}

export class EditCommand extends ScopedCommand {
  // "code" is a supported alias for "edit"
  static override paths = [["edit"], ["code"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Open a project in VSCode (or another configured editor).",
    details: `\
Locates the project directory matching [ORG] and REPO and opens it in the \
configured editor (defaults to VSCode). Use --editor to override the editor \
for this invocation. Alternative editor names are defined in the config file. \
\`dev code\` is an alias for \`dev edit\`.`,
    examples: [
      ["Open a repo in the default editor", "dev edit myorg myrepo"],
      ["Open using the code alias", "dev code myorg myrepo"],
      ["Open in a specific editor", "dev edit --editor fleet myorg myrepo"],
    ],
  });

  org = repoOptions.org;
  repo = repoOptions.repo;

  editor = Option.String("--editor", {
    description:
      "Override the IDE or code editor to launch. Alternative editors are configured by name in the config file.",
  });

  override async execute() {}
}

export class CloneCommand extends ScopedCommand {
  static override paths = [["clone"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Clone a GitHub repo into the canonical location in the dev directory.",
    details: `\
Clones the given GitHub repository into the canonical location under the dev \
directory root. Fails if a clone already exists on either OS (WSL or Windows) \
to avoid accidental duplication across environments. \
Pass --dupe to skip this cross-OS check and explicitly allow a duplicate.`,
  });

  org = repoOptions.org;
  repo = repoOptions.repo;

  dupe = Option.Boolean("--dupe", {
    description:
      "Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.",
  });

  override async execute() {}
}

export class RootCommand extends ScopedCommand {
  static override paths = [["root"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Show the root path(s) of the dev directory.",
    details: `\
Prints the configured dev directory root path(s). \
By default shows roots for both WSL and Windows. \
Use --os / --windows / --wsl / --local to narrow by OS.`,
  });

  override async execute() {}
}

export class NestedFooCommand extends CommonCommand {
  static override paths = [["nested", "foo"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Placeholder nested subcommand foo.",
    details:
      "Included to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.",
  });

  override async execute() {}
}

export class NestedBarCommand extends CommonCommand {
  static override paths = [["nested", "bar"]];
  static override usage = Command.Usage({
    category: categories.code,
    description: "Placeholder nested subcommand bar.",
    details:
      "Included to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.",
  });

  override async execute() {}
}

export class DoctorCommand extends CommonCommand {
  static override paths = [["doctor"]];
  static override usage = Command.Usage({
    category: categories.diagnostic,
    description: "Confirm the environment is set up correctly.",
    details: `\
Verifies that external dependencies (e.g. \`gh\`, \`git\`) are present in PATH. \
Also checks that the \`dev\` CLI is available on the peer OS (WSL ↔ Windows).`,
  });

  override async execute() {}
}

const cli = new Cli({
  binaryLabel: `My Dev CLI`,
  binaryName: `dev`,
  binaryVersion: pkg.version,
});

cli.register(CdCommand);
cli.register(ShellCommand);
cli.register(LsCommand);
cli.register(FindCommand);
cli.register(EditCommand);
cli.register(CloneCommand);
cli.register(RootCommand);
cli.register(NestedFooCommand);
cli.register(NestedBarCommand);
cli.register(DoctorCommand);
cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);

void cli.runExit(process.argv.slice(2));
