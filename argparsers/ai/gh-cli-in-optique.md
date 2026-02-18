Run `gh --help` to get a list of commands, flags, and descriptions from the GH CLI.
Recursively run `gh <subcommand> --help` to get help output for each subcommand, which may be nested several levels deep. For example, `gh auth --help` will reveal that `gh auth login --help` should be called.

As you go, write a full interface description to `ai/gh-cli-in-optique--gh-interface.md`. You will use this description in the next step:

Write `repro/optique-gh-demo.ts` which declares the entire `gh` CLI interface in optique, complete with
all subcommands, flags, and help descriptions. The goal is to be able to run `optique-gh-demo [subcommand] --help` and `gh [subcommand] --help` side-by-side to assess where `gh`'s help output is superior to optique's. The goal is only `--help` output, not actual functional implementations of the commands. They will all no-op.
