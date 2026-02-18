// ai! rewrite this reproduction to be a minimal reproduction for the following:
// Make minimal reproduction code, remove any extraneous code
// Read any peer optique*.ts files for API guidance

// Potential bug:
// are there cases where withDefault swallows a parsing error?
// e.g. --port notanumber but withDefault swallows the parser failure and provides default 8080

import * as o from "@optique/core";
import { run, runAsync } from "@optique/run";

const cli = o.object({
  port: o.withDefault(o.option("--port", o.integer()), 3000),
});

const parsed = await runAsync(cli, {
  programName: "repro",
  brief: o.message`Brief for repro CLI`,
  description: o.message`Description for repro CLI`,
  help: "option",
});

console.dir(parsed);
