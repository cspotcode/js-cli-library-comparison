import * as o from "@optique/core";
import { defineProgram } from "@optique/core/program";
import { run } from "@optique/run";

import alias from "./alias/__group__.ts";
import api from "./api.ts";
import attestation from "./attestation/__group__.ts";
import auth from "./auth/__group__.ts";
import browse from "./browse.ts";
import cache from "./cache/__group__.ts";
import codespace from "./codespace/__group__.ts";
import completion from "./completion.ts";
import config from "./config/__group__.ts";
import extension from "./extension/__group__.ts";
import gist from "./gist/__group__.ts";
import gpgKey from "./gpg-key/__group__.ts";
import issue from "./issue/__group__.ts";
import label from "./label/__group__.ts";
import org from "./org/__group__.ts";
import pr from "./pr/__group__.ts";
import project from "./project/__group__.ts";
import release from "./release/__group__.ts";
import repo from "./repo/__group__.ts";
import ruleset from "./ruleset/__group__.ts";
import run_ from "./run/__group__.ts";
import search from "./search/__group__.ts";
import secret from "./secret/__group__.ts";
import sshKey from "./ssh-key/__group__.ts";
import status from "./status.ts";
import variable from "./variable/__group__.ts";
import workflow from "./workflow/__group__.ts";

const cli = o.or(
  o.group(
    "CORE COMMANDS",
    o.or(auth, browse, codespace, gist, issue, org, pr, project, release, repo),
  ),
  o.group("GITHUB ACTIONS COMMANDS", o.or(cache, run_, workflow)),
  o.group(
    "ADDITIONAL COMMANDS",
    o.or(
      alias,
      api,
      attestation,
      completion,
      config,
      extension,
      gpgKey,
      label,
      ruleset,
      search,
      secret,
      sshKey,
      status,
      variable,
    ),
  ),
);

const program = defineProgram({
  parser: cli,
  metadata: {
    name: "gh",
    brief: o.message`GitHub CLI`,
    description: o.message`Work seamlessly with GitHub from the command line.`,
  },
});

run(program, {
  help: "option",
});
