import * as o from "@optique/core";
import { run } from "@optique/run";

const addCommand = o.command(
  "add",
  o.object({ action: o.constant("add"), force: o.option("--force") }),
  {
    brief: o.message`brief for add command`,
  },
);
const removeCommand = o.command(
  "remove",
  o.object({ action: o.constant("remove"), force: o.option("--force") }),
  {
    brief: o.message`brief for remove command`,
  },
);

const fileCommands = o.command("file", o.or(addCommand, removeCommand), {
  brief: o.message`brief for file command group`,
  description: o.message`description for file command group`,
});

const cli = o.group("File commands", fileCommands);

run(cli, {
  programName: "repro",
  brief: o.message`Brief for repro CLI`,
  description: o.message`Description for repro CLI`,
  help: "option",
});
