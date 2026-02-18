// https://github.com/dahlia/optique/issues/96

// mycli.ts
import * as o from "@optique/core";
import * as m from "@optique/core/message";
import { run, runAsync } from "@optique/run";

const fooCommand = o.command(
  "foo",
  o.object({
    action: o.constant("foo"),
    flag: o.withDefault(
      o.option(
        "--fooflag",
        o.choice(["yes", "no"], {
          // caseInsensitive: true,
          metavar: "ENABLED",
        }),
        {
          description: m.message`${m.valueSet(["yes", "no"], { type: "disjunction" })}, depending on if you want to enable foo`,
        },
      ),
      123,
    ),
  }),
  {
    brief: m.message`foo brief`,
    description: m.message`foo description`,
    footer: m.message`Examples:
      First example:
      Second example:
    `,
  },
);

const cli = fooCommand;

const config = runAsync(cli, {
  programName: "mycli",
  brief: m.message`mycli brief`,
  description: m.message`mycli description`,
  help: "option",
  version: "",
  showDefault: {
    prefix: " [Default: ",
    suffix: "]",
  },
  completion: {
    mode: "command",
    name: "singular",
  },
});

console.dir(config);
