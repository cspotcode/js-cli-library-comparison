# Alternatives: Libraries/Frameworks

*moved to design-sketch*

# Other tools *not* being evaluated

https://github.com/f/omelette (only a tab-completion engine)

# Features

## All candidates support

Subcommands

## They differ on

Shell completions  
  Bash  
  all shells  
Quality --help output
  _subjective_
Quality error messages
  _subjective_
Type-safe flags and args
  _without painful, obscure inference errors_
  Re-use args across multiple commands
  Ergonomic implementation
Proxies: Accepts pass-through flags for a child CLI
  e.g. `bun x tsc --showConfig` where `--showConfig` is _not_ a bun flag!

Global flags
  e.g. `--verbose`
  Do NOT show in help output for each command
  DO show in help output for root command

Command grouping
Flag & Argument grouping

Lazy-loading command implementations _so --help is fast, running a command loads full implementation_

Testability
  Run command programmatically
  Run command w/injected context: stdio, process, env

Merging config file, env vars

## Specific issues I hit

cmd-ts `--help` has non-zero exit code
Clipanion help output: ugly gradients

# Per-tool notes

## Clipanion

Probably never getting completions, cuz yarn rewritten in rust

Positionals can't get descriptions. Their purpose must be described in `details`?

## cmd-ts

They'll never fix the `--help` quirk
_TODO what other pain points did I hit? I copy-pasted `runSafely`, why?_
_Throw error to control exit code?_

## Stricli

Does not allow optional positional prior to required positional
E.g. `mycli [OPTIONAL] <REQUIRED>`
Though the other libraries may also forbid this, just stricli flags it in
typechecking? (ooh fancy)

Does not allow grouping flags in help output, e.g. for global flags like --verbose

## Optique

Got some weird error messages in corner cases
For example:
```
dev code
Error: Missing REPO
dev code foo
Error: Missing REPO
# Despite documenting [ORG] <REPO> where org is optional??
```

Weird help output:
```
dev nested --help
# Shows doc for root command, not `nested` group

dev nested foo --help
# Shows usage for `dev nested`, includes `foo` and `bar` subcommands
# does not show exclusively `foo` help
```

## Yargs

Past issues:  
https://github.com/yargs/yargs/issues?q=is%3Aissue%20author%3Acspotcode

