// Potential bug:
// Optique bug about nonexistent config, explicitly specified
// If config file is optional and has default path, then nonexistent file is ok
// UNLESS user explicitly specifies --config <path>
// Then a nonexistent file is a fatal error

import * as oc from "@optique/config";
import * as ocr from "@optique/config/run";
import * as o from "@optique/core";
import * as r from "@optique/run";
import * as z from "zod";

const configSchema = z.object({
  port: z.optional(z.int()),
});
const configContext = oc.createConfigContext({
  schema: configSchema,
});

const cli = o.object({
  configPath: o.optional(o.option("--configPath", o.string())),
  port: o.withDefault(
    oc.bindConfig(
      e.withEnv(o.option("--port", o.integer()), {
        name: "MYCLI_PORT",
      }),
      {
        context: configContext,
        key: (c) => c.port,
      },
    ),
    8080,
  ),
});

const parsed = await ocr.runWithConfig(cli, configContext, {
  getConfigPath(parsed) {
    console.dir({
      getConfigPath_parsed: parsed,
    });
    return parsed.configPath ?? "mycliconfig.json";
  },
  help: {
    mode: "option",
  },
  onError(exitCode) {
    console.dir({
      onError_exitCode: exitCode,
    });
  },
});

console.dir(parsed);
