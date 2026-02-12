import * as c from "cmd-ts";

import * as pkg from "../package.json";

const repoArgs = {
  org: c.positional({
    type: c.optional(c.string),
    displayName: "org",
    description: "GitHub org or user",
  }),
  repo: c.positional({
    type: c.optional(c.string),
    displayName: "repo",
    description: "Repository name",
  }),
};

const commonFlags = {
  verbose: c.flag({
    type: c.boolean,
    short: "V",
    long: "verbose",
    description: "Verbose logging.",
  }),
  config: c.option({
    type: c.string,
    long: "config",
    description: "Path to config file.",
  }),
};

const cdCommand = c.command({
  name: "cd",
  description: "cd into dev directory root, or into a specific project directory.",
  args: { ...commonFlags, ...repoArgs },
  handler(args) {},
});

const lsCommand = c.command({
  name: "ls",
  description: "List full paths to any local clones that match the naming criteria.",
  args: { ...commonFlags, ...repoArgs },
  handler(args) {},
});

const codeCommand = c.command({
  name: "code",
  description: "Open project in VSCode.",
  args: { ...commonFlags, ...repoArgs },
  handler(args) {},
});

const cloneCommand = c.command({
  name: "clone",
  description: "Clone a GitHub repo into the canonical location in dev directory.",
  args: { ...commonFlags, ...repoArgs },
  handler(args) {},
});

const doctorCommand = c.command({
  name: "doctor",
  description: "Verify that jq, gh, etc. are all in PATH.",
  args: { ...commonFlags },
  handler(args) {},
});

const rootCommand = c.subcommands({
  name: "dev",
  description: "My helper CLI for navigating git projects.",
  version: pkg.version,
  cmds: {
    cd: cdCommand,
    ls: lsCommand,
    code: codeCommand,
    clone: cloneCommand,
    doctor: doctorCommand,
  },
});

void c.run(rootCommand, process.argv.slice(2));
