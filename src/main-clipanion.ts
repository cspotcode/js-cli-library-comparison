import { Builtins, Cli, Command, Option } from "clipanion";

import * as pkg from "../package.json";

const commonArgs = {
  verbose: Option.Counter("-V,--verbose", { description: "Verbose logging." }),
  config: Option.String("--config", { description: "Path to configuration file." }),
};
const repoArgs = {
  org: Option.String({ name: "ORG" }),
  repo: Option.String({ required: true, name: "REPO" }),
};

abstract class CommonCommand extends Command {
  verbose = commonArgs.verbose;
  config = commonArgs.config;
}

export class CdCommand extends CommonCommand {
  static override paths = [["cd"]];
  static override usage = Command.Usage({
    description: "cd into dev directory root, or into a specific project directory.",
  });

  org = repoArgs.org;
  repo = repoArgs.repo;

  override async execute() {}
}

export class CodeCommand extends CommonCommand {
  static override paths = [["code"]];

  static override usage = Command.Usage({
    category: "Editor",
    description: "Open project in VSCode.", // seen in command list, root -h
    details: "Detailed description here.", // only seen when getting specific help for this subcommand
    examples: [["Description of this example", "dev code foo bar"]],
  });

  org = repoArgs.org;
  repo = repoArgs.repo;

  override async execute() {}
}

const cli = new Cli({
  binaryLabel: `My Dev CLI`,
  binaryName: `dev`,
  binaryVersion: pkg.version,
});
cli.register(CdCommand);
cli.register(CodeCommand);
cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);

void cli.runExit(process.argv.slice(2));
