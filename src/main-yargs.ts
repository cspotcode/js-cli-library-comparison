#!/usr/bin/env node
import type { Argv } from "yargs";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import * as pkg from "../package.json";

// Adds scope flags to a command builder and groups them under "Scope:".
// Generic parameter <T> with inferred return type allows @types/yargs to
// automatically build the object literal type for all parsed args
function addScopeFlags<T>(y: Argv<T>) {
  return y
    .option("os", {
      type: "string",
      choices: ["windows", "wsl"] as const,
      description: "Narrow scope to a specific OS.",
    })
    .option("windows", {
      type: "boolean",
      description: "Shorthand for --os windows.",
    })
    .option("wsl", {
      type: "boolean",
      description: "Shorthand for --os wsl.",
    })
    .option("local", {
      type: "boolean",
      description: "Scope to the current OS (e.g. --os windows when running in PowerShell).",
    })
    .option("all", {
      alias: "a",
      type: "boolean",
      description: "Expand scope to both OSes, even when the default would be --local.",
    })
    .option("root", {
      type: "string",
      description:
        "Scope to a single named root directory when multiple roots are configured on one OS.",
    })
    .group(["os", "windows", "wsl", "local", "all", "root"], "Scope:");
}

// Configures the [org] <repo> positionals.
function addRepoArgs<T>(y: Argv<T>) {
  return y
    .positional("org", {
      type: "string",
      description: "GitHub org or user",
    })
    .positional("repo", {
      type: "string",
      description: "Repository name",
      demandOption: true,
    });
}

// Note: yargs does not support grouping commands in help output;
// only flag grouping via .group() is supported.
// Note: yargs does not support a metavar for named options; --config shows as [string].
const parser = yargs(hideBin(process.argv))
  .version(pkg.version)
  .scriptName("dev")
  // Global flags - available on all commands
  .option("verbose", {
    alias: "V",
    description: "Increase log verbosity. Can be specified up to 3 times, e.g. -VVV.",
    count: true,
    global: true,
    group: "Global:",
  })
  .option("config", {
    type: "string",
    description: "Path to config file, to override the default.",
    global: true,
    group: "Global:",
  })

  // Code commands

  .command(
    "cd [org] <repo>",
    "cd into dev directory root, or into a specific project directory.",
    // Deliberately omit type on parameter and allow return type to be inferred
    (y) =>
      addScopeFlags(addRepoArgs(y)).epilog(
        "Defaults to the dev directory root of the same host (Windows or WSL). " +
          "Pass [ORG] and REPO to cd into a specific project directory instead. " +
          "(Note: actually changing the working directory requires shell integration.)",
      ),
    // Deliberately omit type on parameter and allow return type to be inferred
    async (_argv) => {},
  )

  .command(
    "shell [org] <repo>",
    "Launch a new shell in a dev directory.",
    (y) =>
      addScopeFlags(addRepoArgs(y)).epilog(
        "Equivalent to 'dev cd', but instead of requiring shell integration to change the working " +
          "directory it launches a new shell process in the target directory " +
          "(and on the target OS, if different from the current one). " +
          "Pass [ORG] and REPO to target a specific project directory.",
      ),
    async (_argv) => {},
  )

  .command(
    "ls",
    "List paths to all local clones.",
    (y) =>
      addScopeFlags(y)
        .option("format", {
          type: "string",
          choices: ["windows", "wsl"] as const,
          description: "Print paths in the given host's format.",
          group: "Output:",
        })
        .epilog(
          "By default lists clones on both WSL and Windows. " +
            "Use --os / --windows / --wsl / --local to narrow by OS. " +
            "Use --format to control whether paths are printed in Windows or WSL format.",
        ),
    async (_argv) => {},
  )

  .command(
    "find [org] <repo>",
    "List full paths to local clones matching the given name criteria.",
    (y) =>
      addScopeFlags(addRepoArgs(y)).epilog(
        "Searches all configured root directories (on both OSes by default) for clones " +
          "whose org and/or repo name match the provided arguments. " +
          "Useful for scripting or quickly locating a project path without opening it.",
      ),
    async (_argv) => {},
  )

  // "code" is an alias for "edit"
  .command(
    ["edit [org] <repo>", "code"],
    "Open a project in VSCode (or another configured editor).",
    (y) =>
      addScopeFlags(addRepoArgs(y))
        .option("editor", {
          type: "string",
          description:
            "Override the IDE or code editor to launch. Alternative editors are configured by name in the config file.",
          group: "Editor:",
        })
        .epilog(
          "Locates the project directory matching [ORG] and REPO and opens it in the configured editor (defaults to VSCode). " +
            "Use --editor to override the editor for this invocation. " +
            "'dev code' is an alias for 'dev edit'.",
        )
        .example("$0 edit myorg myrepo", "Open a repo in the default editor")
        .example("$0 code myorg myrepo", "Open using the code alias")
        .example("$0 edit --editor fleet myorg myrepo", "Open in a specific editor"),
    async (_argv) => {},
  )

  .command(
    "clone [org] <repo>",
    "Clone a GitHub repo into the canonical location in the dev directory.",
    (y) =>
      addScopeFlags(addRepoArgs(y))
        .option("dupe", {
          type: "boolean",
          description:
            "Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.",
        })
        .epilog(
          "Fails if a clone already exists on either OS (WSL or Windows) to avoid accidental duplication. " +
            "Pass --dupe to skip this cross-OS check and explicitly allow a duplicate.",
        ),
    async (_argv) => {},
  )

  .command(
    "root",
    "Show the root path(s) of the dev directory.",
    (y) =>
      addScopeFlags(y).epilog(
        "Prints the configured dev directory root path(s). " +
          "By default shows roots for both WSL and Windows. " +
          "Use --os / --windows / --wsl / --local to narrow by OS.",
      ),
    async (_argv) => {},
  )

  .command("nested", "Placeholder nested subcommands (included to test nesting).", (y) =>
    y
      .option("flagfornested", {
        boolean: true,
      })
      .command(
        "foo",
        "Placeholder nested subcommand foo.",
        (yy: Argv) =>
          yy.epilog(
            "Included to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.",
          ),
        async (_argv) => {},
      )
      .command(
        "bar",
        "Placeholder nested subcommand bar.",
        (yy: Argv) =>
          yy.epilog(
            "Included to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.",
          ),
        async (_argv) => {},
      )
      .demandCommand(1),
  )

  // Diagnostic commands

  .command(
    "doctor",
    "Confirm the environment is set up correctly.",
    (y) =>
      y.epilog(
        "Verifies that external dependencies (e.g. 'gh', 'git') are present in PATH. " +
          "Also checks that the 'dev' CLI is available on the peer OS (WSL ↔ Windows).",
      ),
    async (_argv) => {},
  )

  .help()
  .alias("help", "h")
  .strict()
  .demandCommand(1);

await parser.parseAsync();
