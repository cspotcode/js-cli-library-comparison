set dotenv-load
set positional-arguments
set windows-shell := ['sh', '-euc']
SHEBANG := if os() == 'windows' {
  'sh'
} else {
  '/usr/bin/env sh'
}
INIT := 'set -euo pipefail'

# node_modules and bun.exe location
export PATH := justfile_dir() + '/node_modules/.bin' + PATH_VAR_SEP + env_var('PATH')

@default:
  just --list --unsorted

# Initialize dev environment
install:
  bun install

# Run all static code analysis
check: lint typecheck fmtcheck

# Perform all auto-fixes
fix: lint-fix fmt

fmt:
  oxfmt

fmtcheck:
  oxfmt --check

typecheck:
  tsc --noEmit

lint:
  oxlint

lint-fix:
  oxlint --fix

# Execute all CLI demos, passing the same set of positional arguments and flags
demo *ARGS:
  just _divider
  just demo-brocli "$@" || true
  just _divider
  just demo-clipanion "$@" || true
  just _divider
  just demo-cmd-ts "$@" || true
  just _divider
  just demo-optique "$@" || true
  just _divider
  just demo-stricli "$@" || true
  just _divider
  just demo-yargs "$@" || true
  just _divider

@_divider:
  bun --eval 'console.log("\x1b[30;47m" + " ".repeat(process.stdout.columns) + "\x1b[0m")'

demo-brocli *ARGS:
  bun ./src/main-brocli.ts "$@"

demo-clipanion *ARGS:
  bun ./src/main-clipanion.ts "$@"

demo-cmd-ts *ARGS:
  bun ./src/main-cmd-ts.ts "$@"

demo-optique *ARGS:
  bun ./src/main-optique.ts "$@"

demo-stricli *ARGS:
  @# cd my-app && bun ./src/bin/cli.ts "$@"
  bun ./src/main-stricli.ts "$@"

demo-yargs *ARGS:
  bun ./src/main-yargs.ts "$@"