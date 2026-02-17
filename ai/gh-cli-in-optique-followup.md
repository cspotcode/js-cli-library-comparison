# Original task, already completed, included for context:

Run `gh --help` to get a list of commands, flags, and descriptions from the GH CLI.
Recursively run `gh <subcommand> --help` to get help output for each subcommand, which may be nested several levels deep. For example, `gh auth --help` will reveal that `gh auth login --help` should be called.

As you go, write a full interface description to `ai/gh-cli-in-optique--gh-interface.md`. You will use this description in the next step:

Write `repro/optique-gh-demo.ts` which declares the entire `gh` CLI interface in optique, complete with
all subcommands, flags, and help descriptions. The goal is to be able to run `optique-gh-demo [subcommand] --help` and `gh [subcommand] --help` side-by-side to assess where `gh`'s help output is superior to optique's. The goal is only `--help` output, not actual functional implementations of the commands. They will all no-op.

# Followup task, cleanup, improvements:

- Ensure commands are listed in `--help` output in the correct order, matching the original `gh` output.
- Inconsistent application of "Available commands" sub-grouping. If the group name is "available commands", that's the Cobra default, don't call group()
- Trailing colons in group names: omit them, they'll be emitted by optique's help formatter
- some things mentioned in help text should be wrapped as follows, to format in the correct colors:
  - flags wrapped as ${optionName("--verbose")} 
  - urls as ${link("https://example.com")}
- some command groups are missing "description", for example when I `gh issue --help` I should see the `Work with GitHub issues.` text from `repro/optique-gh-demo/__NOTES__/gh-help/issue.txt`.
- some commands have truncated descriptions. For example, `repro/optique-gh-demo/__NOTES__/gh-help/alias/set.txt` shows a four paragraph description ending with `piping and redirection.` yet the description in `set.ts` ends at `inserted appropriately.`