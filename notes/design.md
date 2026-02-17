# `dev` demonstration CLI

This sketch of a CLI is implemented by each CLI library / framework.
Commands are all no-ops, but subcommands, args, docs, and flags are all declared.

## Alternatives

Each of these CLI frameworks is being demo'd by implementing our sample CLI interface.

brocli: https://github.com/drizzle-team/brocli
Clipanion: https://mael.dev/clipanion
cmd-ts:
  https://cmd-ts.vercel.app/
  https://github.com/Schniz/cmd-ts/blob/main/README.md
Optique: https://optique.dev/
stricli: https://bloomberg.github.io/stricli/
yargs: https://yargs.js.org/docs/

The following alternatives are *not* being demo'd, listed here for future reference:

require('util').parseArgs - node.js built-in API: https://nodejs.org/api/util.html#utilparseargsconfig
oclif: https://oclif.io/
@std/cli:
  https://jsr.io/@std/cli
  https://jsr.io/@std/cli/doc
commander.js: https://github.com/tj/commander.js
cliffy: https://cliffy.io/
cleye: https://github.com/privatenumber/cleye
gunshi: https://gunshi.dev/guide/introduction/what-is-gunshi
cac: https://github.com/cacjs/cac
citty: https://github.com/unjs/citty

@bomb.sh/tab: https://github.com/bombshell-dev/tab
  Only implements completions, not arg parsing. Meant to be adopted by CLI parsing libraries to implement completions

## Implementation guidelines

Each implementation lives in `src` with a reasonable name like `main-optique.ts` for optique or `main-std-cli.ts` for `@std/cli`

All share a common `package.json` and other project boilerplate.

All have a dedicated recipe in `justfile` to run them, passing arguments. All are referenced in `demo` recipe so you can run each demo at once.

If the library or framework allows both a brief docstring and a more comprehensive docstring for a given command, flag, or positional argument, then provide both with varying levels of detail. This will allow us to evaluate the differences between `--help` output of the different libraries.

If the library or framework allows grouping subcommands, so that they appear grouped in
`--help` output, then group them by the categories shown below.

Same for flags: if it allows grouping, use the groupings below.

If the library allows, specify metavars for flags so they can appear in `--help` as `--flagname metavar` instead of a more generic `--flagname string`

## Subcommands

### Group: Code

`dev cd`
  cd into dev directory root
  Defaults to dev directory root of the same host (Windows or WSL)
  Can be overridden with `--host`
  TODO requires shell integration to change working directory in current shell, but whatever, ignore that wrinkle for now
`dev cd [org] <repo>`
  cd into project directory, show menu if it's ambiguous (for example, repo is available in WSL and Windows)
  `--host` to clear ambiguity
`dev shell`
`dev shell [org] <repo>`
  `dev shell` is equivalent to `dev cd`, except instead of requiring shell integration to change working directory, it launches a new shell in the target directory and on the target OS
`dev ls`
  List paths to all local clones
`dev find [org] <repo>`
  List full paths to any local clones that match the naming criteria
`dev edit [org] <repo>`
  Open project in VSCode
`dev code` is an alias for `dev edit`

`dev clone [org] <repo>`
  Clone a Github repo into the canonical location in dev directory.
  Fail if clone already exists in either OS, WSL or Windows.
  Pass `--dupe` to skip this cross-OS check, explicitly allowing a duplicate.

`dev root`
  Show root path(s) to dev directory
  Show both WSL and host? How to choose?
  What format, Linux or Windows?

`dev nested foo`
`dev nested bar`
  Included to test nested subcommands.
  Couldn't think of realistic motivation, so opted for these `foo` and `bar` placeholders instead.

### Group: Diagnostic

`dev doctor`
  Confirm env is set up correctly.
  Verify that dependencies such as gh are all in PATH.
  Verify that `dev` CLI also exists on the peer OS, WSL or Windows.

## Global Flags

These are available on *all* commands.

`-V,--verbose`
  Increase log verbosity. Can be specified up to 3 times to increase level, e.g. `-VVV` or `--verbose --verbose --verbose`
`--config <PATH>`
  Path to config file, to override the default.

## Shared Flags

Descriptions for flags which are not global (are not implemented on every command), though they may be shared among a group of commands.

### Group: Scope

For commands that locate local clones, they by default locate clones on *both* WSL guest and Windows host
and log the paths to them in the current host's path format.

They are implemented on subcommands: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`

`--os <windows|wsl>` narrows scope to a single OS. `--windows` and `--wsl` are shorthands.
`--local` means whatever OS is running this command, e.g. if I'm in a powershell shell on windows, `--local` is equivalent to `--os windows` or `--windows`. If I'm in a zsh shell on WSL, `--local` is equivalent to `--wsl`
`-a,--all` expands scope to both OSes when default would otherwise be `--local`.

`--root <name>` is used when multiple root directories are configured on a single OS, e.g. `work` and `personal`.  This will scope down to a single root directory.

### Group: Output

`--format <windows|wsl>` logs paths in the format expected by the given host.
Implemented on subcommands: `ls`

### Group: Editor

`--editor <editor>` to override the IDE or code editor which is launched.
Defaults to VSCode. Alternative editors are configured by name in config file.
Implemented on subcommands: `edit`
