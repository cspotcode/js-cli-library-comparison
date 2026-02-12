import {
  argument,
  command,
  constant,
  message,
  object,
  option,
  optional,
  or,
  string,
  group,
  merge,
} from "@optique/core";
import { run } from "@optique/run";

import * as pkg from "../package.json";

const globalFlags = {
  config: group(
    "Core",
    option("--config", string({ metavar: "PATH" }), {
      description: message`Path to config file.`,
    }),
  ),
  verbose: group(
    "Logging",
    option("-V", "--verbose", {
      description: message`Verbose logging.`,
    }),
  ),
};
const repoArgs = {
  org: optional(argument(string({ metavar: "ORG" }), { description: message`GitHub org or user` })),
  repo: argument(string({ metavar: "REPO" }), { description: message`Repository name` }),
};

const cli = merge(
  object({
    // Global flags
    ...globalFlags,
  }),
  // Subcommands
  or(
    command("cd", object({ action: constant("cd"), ...repoArgs }), {
      brief: message`cd into dev directory root, or into a specific project directory.`,
      description: message`cd into dev directory root, or into a specific project directory.`,
    }),
    command("ls", object({ action: constant("ls"), ...repoArgs }), {
      description: message`List full paths to any local clones that match the naming criteria.`,
    }),
    command("code", object({ action: constant("code"), ...repoArgs }), {
      description: message`Open project in VSCode.`,
    }),
    command("clone", object({ action: constant("clone"), ...repoArgs }), {
      description: message`Clone a GitHub repo into the canonical location in dev directory.`,
    }),
    command("doctor", object({ action: constant("doctor") }), {
      description: message`Verify that jq, gh, etc. are all in PATH.`,
    }),
    command(
      "nested",
      or(
        command("foo", object({ action: constant("foo") }), {
          description: message`This is a nested subcommand foo`,
        }),
        command("bar", object({ action: constant("bar") }), {
          description: message`This is a nested subcommand bar`,
        }),
      ),
      {
        brief: message`Group of subcommands`,
        description: message`Description for group of subcommands`,
      },
    ),
  ),
);

const config = run(cli, {
  programName: "dev",
  brief: message`My helper CLI for navigating git projects. (brief)`,
  description: message`My helper CLI for navigating git projects. (description)`,
  help: "both",
  version: pkg.version,
});
console.dir(config);
