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
export PATH := source_dir() + '/node_modules/.bin' + PATH_VAR_SEP + env_var('PATH')

# {{mod}} to run a `just` command against the current module
mod := quote(just_executable()) + " --justfile " + quote(module_file())
# {{just}} to run a `just` command against the root justfile
just := quote(just_executable()) + " --justfile " + quote(justfile())

[default]
@list:
  {{mod}} --list --unsorted
