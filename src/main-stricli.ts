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
  type FlagParametersForType,
  type Aliases,
} from "@stricli/core";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import * as pkg from "../package.json";

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

interface CommonFlags {
  verbose: boolean;
  config: string;
}
const commonFlags: TypedCommandParameters<Readonly<CommonFlags>, [], CommandContext> = {
  flags: {
    verbose: {
      brief: "Verbose logging.",
      kind: "boolean",
      // withNegated: false,
    },
    config: {
      brief: "Path to config file.",
      kind: "parsed",
      parse: String,
      placeholder: "PATH",
    },
  },
  aliases: {
    v: "verbose",
  },
};
// const commonFlags_: FlagParametersForType<CommonFlags> = {
//   verbose: {
//     brief: "Verbose logging.",
//     kind: "boolean",
//   },
// };
// const commonFlagsAliases: Aliases<keyof typeof commonFlags_> = {
//   v: "verbose",
// };

const repoArgs: TypedCommandParameters<{}, [org: string, repo: string], CommandContext> = {
  positional: {
    kind: "tuple",
    parameters: [
      {
        placeholder: "ORG",
        brief: "Github org or user",
        parse: String,
      },
      {
        placeholder: "REPO",
        brief: "Repository name",
        parse: String,
      },
    ],
  },
};

const cdCommand = buildCommand({
  // NOTE: must be an ARROW function for stricli to infer parameter types!
  func: async (_: CommonFlags, org: string, repo: string) => {},
  parameters: {
    flags: {
      ...commonFlags.flags,
    },
    aliases: {
      ...commonFlags.aliases,
    },
    positional: {
      kind: "tuple",
      parameters: repoArgs.positional.parameters,
    },
  },
  docs: {
    brief: "cd into dev directory root, or into a specific project directory.",
  },
});

const codeCommand = buildCommand({
  // NOTE: must be an ARROW function for stricli to infer parameter types!
  func: async (_: CommonFlags, org: string, repo: string) => {},
  parameters: {
    flags: {
      ...commonFlags.flags,
    },
    aliases: {
      ...commonFlags.aliases,
    },
    positional: {
      kind: "tuple",
      parameters: repoArgs.positional.parameters,
    },
  },
  docs: {
    brief: "Open project in VSCode.",
  },
});

const routes = buildRouteMap({
  routes: {
    cd: cdCommand,
    code: codeCommand,
    install: buildInstallCommand("my-app", { bash: "__my-app_bash_complete" }),
    uninstall: buildUninstallCommand("my-app", { bash: true }),
  },
  docs: {
    brief: "My helper CLI for navigating git projects.",
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
