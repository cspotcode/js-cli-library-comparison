import * as o from "@optique/core";

import code from "./code.ts";
import cp from "./cp.ts";
import create from "./create.ts";
import delete_ from "./delete.ts";
import edit from "./edit.ts";
import list from "./list.ts";
import logs from "./logs.ts";
import ports from "./ports.ts";
import rebuild from "./rebuild.ts";
import ssh from "./ssh.ts";
import stop from "./stop.ts";
import view from "./view.ts";

export default o.command(
  "codespace",
  o.or(code, cp, create, delete_, edit, list, logs, ports, rebuild, ssh, stop, view),
  { brief: o.message`Connect to and manage codespaces` },
);
