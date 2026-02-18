## Gotchas / Design smells

It's ambiguous whether a given commands is operating on the current OS or is
searching / operating across both WSL and Windows.

Operating across both OSes additionally requires WSL to boot for Windows-only dev,
because sanity-checks still need to read the WSL filesystem.

**Operate on both OSes by default**

- Pros
  - avoid accidentally forgetting to check the other OS: duplicate clones, opening the wrong worktree
  - UX: convenient to launch WSL from Windows and vice versa
- Cons
  - complex to launch WSL from Windows and vice versa
  - `cd` doesn't make sense to run cross-OS?

**Operate on current OS by default**

- Pros
  - Performance: don't read cross-filesystem on simple commands that operate locally.
- Cons
  - Accidentally forget to check other OS: duplicate clones, open wrong worktree

## Untested features

These are features I'm aware of, that some CLI libraries support, that are not
being demonstrated by this demo CLI.

- Clipanion proxies: to implement e.g. `yarn run external-command --flag-to-external-command` without interpreting `--flag-to-external-command` as a flag to `yarn run`

- `--` to stop parsing

- Quality of tab completions

- ability to be bundled
- ability to be bun compiled

