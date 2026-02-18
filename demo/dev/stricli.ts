#!/usr/bin/env node
import {
  buildInstallCommand,
  buildUninstallCommand,
  type StricliAutoCompleteContext,
} from "@stricli/auto-complete";
import {
  run,
  buildApplication,
  buildCommand,
  buildRouteMap,
  type CommandContext,
  type TypedCommandParameters,
} from "@stricli/core";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import * as pkg from "../../package.json";

export interface LocalContext extends CommandContext, StricliAutoCompleteContext {
  readonly process: NodeJS.Process;
  // ...
}

export function buildContext(process: NodeJS.Process): LocalContext {
  return {
    process,
    os,
    fs,
    path,
  };
}

// ---------------------------------------------------------------------------
// Flag interfaces
// ---------------------------------------------------------------------------

interface CommonFlags {
  // Counter: undefined when not passed, increments each time the flag is used.
  verbose?: number;
  config?: string;
}

// Scope flags — on commands that locate local clones.
interface ScopeFlags {
  os?: "windows" | "wsl";
  windows?: boolean;
  wsl?: boolean;
  local?: boolean;
  all?: boolean;
  root?: string;
}

// ---------------------------------------------------------------------------
// Shared parameter sets
// ---------------------------------------------------------------------------

// Global flags — on every command.
const commonFlagParams: TypedCommandParameters<Readonly<CommonFlags>, [], CommandContext> = {
  flags: {
    verbose: {
      brief: "Increase log verbosity. Can be specified up to 3 times, e.g. -VVV.",
      kind: "counter",
      optional: true,
    },
    config: {
      brief: "Path to config file, to override the default.",
      kind: "parsed",
      parse: String,
      placeholder: "PATH",
      optional: true,
    },
  },
  aliases: {
    V: "verbose",
  },
};

// Scope flags — on commands that locate local clones.
// Note: stricli does not support flag grouping.
const scopeFlagParams: TypedCommandParameters<Readonly<ScopeFlags>, [], CommandContext> = {
  flags: {
    os: {
      brief: "Narrow scope to a specific OS.",
      kind: "enum",
      values: ["windows", "wsl"],
      optional: true,
    },
    windows: {
      brief: "Shorthand for --os windows.",
      kind: "boolean",
      optional: true,
    },
    wsl: {
      brief: "Shorthand for --os wsl.",
      kind: "boolean",
      optional: true,
    },
    local: {
      brief: "Scope to the current OS (e.g. --os windows when running in PowerShell).",
      kind: "boolean",
      optional: true,
    },
    all: {
      brief: "Expand scope to both OSes, even when the default would be --local.",
      kind: "boolean",
      optional: true,
    },
    root: {
      brief: "Scope to a single named root directory when multiple roots are configured on one OS.",
      kind: "parsed",
      parse: String,
      placeholder: "NAME",
      optional: true,
    },
  },
  aliases: {
    a: "all",
  },
};

// Repo positionals — for commands that accept [ORG] REPO.
// ORG is optional; REPO is required.
const repoParams: TypedCommandParameters<
  {},
  [org: string | undefined, repo: string],
  CommandContext
> = {
  positional: {
    kind: "tuple",
    parameters: [
      {
        placeholder: "ORG",
        brief: "GitHub org or user",
        parse: String,
        optional: true,
      },
      {
        placeholder: "REPO",
        brief: "Repository name",
        parse: String,
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Code group
// ---------------------------------------------------------------------------

const cdCommand = buildCommand({
  // NOTE: must be an ARROW function for stricli to infer parameter types!
  func: async (_: CommonFlags & ScopeFlags, _org: string | undefined, _repo: string) => {},
  parameters: {
    flags: { ...commonFlagParams.flags, ...scopeFlagParams.flags },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
    positional: repoParams.positional,
  },
  docs: {
    brief: "cd into dev directory root, or into a specific project directory.",
    fullDescription:
      "Defaults to the dev directory root of the same host (Windows or WSL). " +
      "Pass [ORG] and REPO to cd into a specific project directory instead. " +
      "(Note: actually changing the working directory requires shell integration.)",
  },
});

const shellCommand = buildCommand({
  func: async (_: CommonFlags & ScopeFlags, _org: string | undefined, _repo: string) => {},
  parameters: {
    flags: { ...commonFlagParams.flags, ...scopeFlagParams.flags },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
    positional: repoParams.positional,
  },
  docs: {
    brief: "Launch a new shell in a dev directory.",
    fullDescription:
      "Equivalent to 'dev cd', but instead of requiring shell integration to change the working " +
      "directory it launches a new shell process in the target directory " +
      "(and on the target OS, if different from the current one). " +
      "Pass [ORG] and REPO to target a specific project directory.",
  },
});

const lsCommand = buildCommand({
  func: async (_: CommonFlags & ScopeFlags & { format?: "windows" | "wsl" }) => {},
  parameters: {
    flags: {
      ...commonFlagParams.flags,
      ...scopeFlagParams.flags,
      format: {
        brief: "Print paths in the given host's format.",
        kind: "enum",
        values: ["windows", "wsl"],
        optional: true,
      },
    },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
  },
  docs: {
    brief: "List paths to all local clones.",
    fullDescription:
      "By default lists clones on both WSL and Windows. " +
      "Use --os / --windows / --wsl / --local to narrow by OS. " +
      "Use --format to control whether paths are printed in Windows or WSL format.",
  },
});

const findCommand = buildCommand({
  func: async (_: CommonFlags & ScopeFlags, _org: string | undefined, _repo: string) => {},
  parameters: {
    flags: { ...commonFlagParams.flags, ...scopeFlagParams.flags },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
    positional: repoParams.positional,
  },
  docs: {
    brief: "List full paths to local clones matching the given name criteria.",
    fullDescription:
      "Searches all configured root directories (on both OSes by default) for clones " +
      "whose org and/or repo name match the provided arguments. " +
      "Useful for scripting or quickly locating a project path without opening it.",
  },
});

// "code" is registered as a route alias for "edit" in the route map below.
const editCommand = buildCommand({
  func: async (
    _: CommonFlags & ScopeFlags & { editor?: string },
    _org: string | undefined,
    _repo: string,
  ) => {},
  parameters: {
    flags: {
      ...commonFlagParams.flags,
      ...scopeFlagParams.flags,
      editor: {
        brief:
          "Override the IDE or code editor to launch. Alternative editors are configured by name in the config file.",
        kind: "parsed",
        parse: String,
        placeholder: "EDITOR",
        optional: true,
      },
    },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
    positional: repoParams.positional,
  },
  docs: {
    brief: "Open a project in VSCode (or another configured editor).",
    fullDescription:
      "Locates the project directory matching [ORG] and REPO and opens it in the " +
      "configured editor (defaults to VSCode). Use --editor to override the editor " +
      "for this invocation. Alternative editor names are defined in the config file. " +
      "'dev code' is an alias for 'dev edit'.",
  },
});

const cloneCommand = buildCommand({
  func: async (
    _: CommonFlags & ScopeFlags & { dupe?: boolean },
    _org: string | undefined,
    _repo: string,
  ) => {},
  parameters: {
    flags: {
      ...commonFlagParams.flags,
      ...scopeFlagParams.flags,
      dupe: {
        brief:
          "Skip the cross-OS duplicate check and allow cloning even if the repo already exists on the peer OS.",
        kind: "boolean",
        optional: true,
      },
    },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
    positional: repoParams.positional,
  },
  docs: {
    brief: "Clone a GitHub repo into the canonical location in the dev directory.",
    fullDescription:
      "Fails if a clone already exists on either OS (WSL or Windows) to avoid accidental duplication. " +
      "Pass --dupe to skip this cross-OS check and explicitly allow a duplicate.",
  },
});

const rootCommand = buildCommand({
  func: async (_: CommonFlags & ScopeFlags) => {},
  parameters: {
    flags: { ...commonFlagParams.flags, ...scopeFlagParams.flags },
    aliases: { ...commonFlagParams.aliases, ...scopeFlagParams.aliases },
  },
  docs: {
    brief: "Show the root path(s) of the dev directory.",
    fullDescription:
      "Prints the configured dev directory root path(s). " +
      "By default shows roots for both WSL and Windows. " +
      "Use --os / --windows / --wsl / --local to narrow by OS.",
  },
});

// Nested subcommands — included to test nesting.
const nestedRouteMap = buildRouteMap({
  routes: {
    foo: buildCommand({
      func: async (_: CommonFlags) => {},
      parameters: {
        flags: { ...commonFlagParams.flags },
        aliases: { ...commonFlagParams.aliases },
      },
      docs: {
        brief: "Placeholder nested subcommand foo.",
        fullDescription:
          "Included to test nested subcommand behaviour. No realistic motivation — foo is a placeholder.",
      },
    }),
    bar: buildCommand({
      func: async (_: CommonFlags) => {},
      parameters: {
        flags: { ...commonFlagParams.flags },
        aliases: { ...commonFlagParams.aliases },
      },
      docs: {
        brief: "Placeholder nested subcommand bar.",
        fullDescription:
          "Included to test nested subcommand behaviour. No realistic motivation — bar is a placeholder.",
      },
    }),
  },
  docs: {
    brief: "Placeholder nested subcommands.",
    fullDescription: "Group of placeholder nested subcommands included to test nesting behaviour.",
  },
});

// ---------------------------------------------------------------------------
// Diagnostic group
// ---------------------------------------------------------------------------

const doctorCommand = buildCommand({
  func: async (_: CommonFlags) => {},
  parameters: { flags: { ...commonFlagParams.flags }, aliases: { ...commonFlagParams.aliases } },
  docs: {
    brief: "Confirm the environment is set up correctly.",
    fullDescription:
      "Verifies that external dependencies (e.g. 'gh', 'git') are present in PATH. " +
      "Also checks that the 'dev' CLI is available on the peer OS (WSL ↔ Windows).",
  },
});

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

// Note: stricli does not support command grouping (Code / Diagnostic).
const routes = buildRouteMap({
  routes: {
    cd: cdCommand,
    shell: shellCommand,
    ls: lsCommand,
    find: findCommand,
    edit: editCommand,
    clone: cloneCommand,
    root: rootCommand,
    nested: nestedRouteMap,
    doctor: doctorCommand,
    install: buildInstallCommand("dev", { bash: "__dev_bash_complete" }),
    uninstall: buildUninstallCommand("dev", { bash: true }),
  },
  // "code" is an alias for "edit"
  aliases: {
    code: "edit",
  },
  docs: {
    brief: "My helper CLI for navigating git projects.",
    fullDescription:
      "A helper CLI for navigating and managing git projects across WSL and Windows.",
    hideRoute: {
      install: true,
      uninstall: true,
    },
  },
});

export const app = buildApplication(routes, {
  name: "dev",
  documentation: {
    onlyRequiredInUsageLine: true,
    useAliasInUsageLine: true,
  },
  versionInfo: {
    currentVersion: pkg.version,
  },
});

await run(app, process.argv.slice(2), buildContext(process));
