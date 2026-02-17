// https://github.com/dahlia/optique/issues/96

import * as config from "@optique/config";
import * as configRun from "@optique/config/run";
// mycli.ts
import * as o from "@optique/core";
import { defineProgram } from "@optique/core/program";
import * as run from "@optique/run";
import { z } from "zod";

const configSchema = z.object({
  outFile: z.optional(z.string()),
});

const configContext = config.createConfigContext({ schema: configSchema });

const parser = o.object({
  configFile: o.withDefault(o.option("--config", o.string()), "./.myapp.json"),
  outFile: config.bindConfig(o.option("--outFile", o.string()), {
    context: configContext,
    key: (config) => config.outFile,
    default: "./output.txt",
  }),
});

let mode: "run.run" | "o.runWith" | "configRun.runWithConfig";
mode = "configRun.runWithConfig" as typeof mode;

const program = defineProgram({
  parser,
  metadata: {
    name: "mycli",
    author: o.message`me`,
  },
});

let parsed;
if (mode === "run.run") {
  run.run(program, {
    completion: "command",
    help: "option",
  });
} else if (mode === "configRun.runWithConfig") {
  parsed = await configRun.runWithConfig(program, configContext, {
    completion: "command",
    help: "option",
    getConfigPath(firstPassArgs) {
      return firstPassArgs.configFile;
    },
    onError(exitCode) {},
  });
} else if (mode === "o.runWith") {
  const parsed = await o.runWith(parser, "mycli", [configContext], {
    programName: "mycli",
    author: o.message`me`,
    completion: "command",
    help: "option",
    getConfigPath(firstPassArgs) {
      return firstPassArgs.configFile;
    },
    fileParser(contents: Uint8Array) {
      return contents;
    },
  });
}

console.dir(parsed);
