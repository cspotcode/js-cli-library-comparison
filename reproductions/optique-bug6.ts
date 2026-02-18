import * as o from "@optique/core";
import { run } from "@optique/run";

const addCommand = o.command(
  "add",
  o.object({ action: o.constant("add"), force: o.option("--force") }),
  {},
);
const removeCommand = o.command(
  "remove",
  o.object({ action: o.constant("remove"), force: o.option("--force") }),
  {},
);

const fileCommandGroup = o.group("File commands", o.or(addCommand, removeCommand));

const cli = fileCommandGroup;

run(cli, { programName: "repro", help: "option" });
