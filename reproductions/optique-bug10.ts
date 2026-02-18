// How to get errors from runWithConfig?

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

const parsed = await ocr.runWithConfig(
  o.object({
    port: o.optional(o.option("--port", o.port())),
  }),
  configContext,
  {
    getConfigPath(parsed) {
      return undefined;
    },
  },
);

console.dir(parsed);

const parsed2 = await o.runWith(
  o.object({
    port: o.optional(o.option("--port", o.port())),
  }),
  "mycli",
  [configContext],
  {
    getConfigPath(parsed) {
      return undefined;
    },
  },
);

console.dir(parsed2);

const parsed3 = await r.runAsync(
  o.object({
    port: o.optional(
      o.map(o.option("--port", o.port()), (v) => {
        throw new Error("parse failure");
        return v + 1;
      }),
    ),
  }),
  {},
);
console.dir(parsed3);
