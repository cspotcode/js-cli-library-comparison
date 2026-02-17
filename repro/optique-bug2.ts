// https://github.com/dahlia/optique/issues/96

// mycli.ts
import { command, constant, message, object, option, or, string } from "@optique/core";
import { run } from "@optique/run";

const fooCommand = command(
  "foo",
  object({ action: constant("foo"), flag: option("--fooflag", string()) }),
  {
    brief: message`foo brief`,
    description: message`foo description`,
  },
);
const barCommand = command(
  "bar",
  object({ action: constant("bar"), flag: option("--barflag", string()) }),
  {
    brief: message`bar brief`,
    description: message`bar description`,
  },
);

const topLevelCommand = command(
  "toplevel",
  object({ action: constant("toplevel"), flag: option("--toplevelflag", string()) }),
);

const nestedGroup = command("nested", or(fooCommand, barCommand), {
  brief: message`nested brief`,
  description: message`nested description`,
});

const cli = or(topLevelCommand, nestedGroup);

const config = run(cli, {
  programName: "mycli",
  brief: message`mycli brief`,
  description: message`mycli description`,
  help: "option",
  version: "",
});
console.dir(config);
