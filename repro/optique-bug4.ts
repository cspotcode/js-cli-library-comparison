// https://github.com/dahlia/optique/issues/96

// mycli.ts
import * as o from "@optique/core";
import * as m from "@optique/core/message";
import { runAsync } from "@optique/run";

const addCommand = o.command("add", o.constant("add"), {
  brief: m.message`Add files`,
  description: m.message`Add files to cache`,
});
const removeCommand = o.command("remove", o.constant("remove"), {
  brief: m.message`Remove files`,
  description: m.message`Remove files from cache`,
});

// const cli = o.or(o.group("foo", addCommand), o.group("bar", removeCommand));
const cli = removeCommand;

const config = runAsync(cli, {
  programName: "mycli",
  completion: {
    mode: "command",
    name: "singular",
  },
  help: "option",
});

console.dir(config);
