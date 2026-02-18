import * as o from "@optique/core";

import login from "./login.ts";
import logout from "./logout.ts";
import refresh from "./refresh.ts";
import setupGit from "./setup-git.ts";
import status from "./status.ts";
import switchCmd from "./switch.ts";
import token from "./token.ts";

export default o.command("auth", o.or(login, logout, refresh, setupGit, status, switchCmd, token), {
  brief: o.message`Authenticate gh and git with GitHub`,
});
