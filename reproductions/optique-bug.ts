// https://github.com/dahlia/optique/issues/95

// mycli.ts
import { command, constant, message, object, or } from "@optique/core";
import { run } from "@optique/run";

const cli = or(
  command("foo", object({ action: constant("foo") }), {
    brief: message`foo brief`,
    description: message`foo description`, // <-- I want to see these docs when I run `mycli foo --help`.  brief would be ok, too.
  }),
  command("bar", object({ action: constant("bar") }), {
    brief: message`bar brief`,
    description: message`bar description`,
  }),
);

const config = run(cli, {
  programName: "mycli",
  brief: message`mycli brief`, // <-- ERROR: this is what I see instead of the docs for `foo` subcommand
  description: message`mycli description`, // <-- this too
  help: "option",
  version: "",
});
console.dir(config);
