#!/usr/bin/env node
import type { Argv } from "yargs";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as pkg from "../package.json";

const parser = yargs(hideBin(process.argv))
  .version(pkg.version)
  .scriptName("dev")
  .option("verbose", {
    alias: "V",
    description: "Verbose logging.",
    count: true,
    global: true,
    group: "Logging:",
  })
  .command(
    "cd [org] <repo>",
    "cd into dev directory root, or into a specific project directory.",
    (y: Argv) =>
      // Builder populates yargs w/positionals and flags for this subcommand
      y
        .positional("org", {
          description: "Github org or user",
          type: "string",
        })
        .positional("repo", {
          description: "Repository name",
          type: "string",
          demandOption: true,
        }),
    async (argv: any) => {
      // command implementation
    },
  )
  .command(
    "code [org] <repo>",
    "Open project in VSCode.",
    (y: Argv) =>
      y
        .positional("org", {
          description: "Github org or user",
          type: "string",
        })
        .positional("repo", {
          description: "Repository name",
          type: "string",
          demandOption: true,
        }),
    async (argv) => {
      // command implementation
    },
  )
  .help()
  .alias("help", "h")
  .strict()
  .demandCommand(1);

const args = await parser.parseAsync();

console.dir(args);
