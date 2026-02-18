import * as o from "@optique/core";
import { run } from "@optique/run";

const globalFlags = o.group(
  "Global:",
  o.object({
    config: o.option("--config", o.string()),
  }),
);

const fooCommand = o.command("foo", o.object({ action: o.constant("foo") }), {});
const barCommand = o.command("bar", o.object({ action: o.constant("bar") }), {});
const bazCommand = o.command("baz", o.object({ action: o.constant("baz") }), {});
const biffCommand = o.command("biff", o.object({ action: o.constant("biff") }), {});

const fooBarCommandGroup = o.group("Foobar commands:", o.or(fooCommand, barCommand));
const bazBiffCommandGroup = o.group("Bazbiff commands:", o.or(bazCommand, biffCommand));
const bazCommandGroup = o.group("Bazbiff commands:", bazCommand);

const cli = o.merge(globalFlags, o.or(fooBarCommandGroup, bazCommandGroup));

run(cli, { programName: "repro" });
