# Update Demos Checklist

Reference spec: [notes/design.md](../notes/design.md)

## Commands required by spec

- `cd [org] <repo>` — Code group
- `shell [org] <repo>` — Code group
- `ls` — Code group
- `find [org] <repo>` — Code group
- `edit [org] <repo>` — Code group
- `code` — alias for `edit` — Code group
- `clone [org] <repo>` — Code group
- `root` — Code group
- `nested foo` — Code group
- `nested bar` — Code group
- `doctor` — Diagnostic group

## Global flags required by spec

- `-V,--verbose` — counter (stackable up to 3x), metavar not applicable
- `--config <PATH>` — string, metavar `PATH`

## Shared Scope flags (on cd, shell, ls, find, edit, root, clone)

- `--os <windows|wsl>`
- `--windows` (shorthand for `--os windows`)
- `--wsl` (shorthand for `--os wsl`)
- `--local`
- `-a,--all`
- `--root <name>`

## Shared Output flags (on ls)

- `--format <windows|wsl>`

## Shared Editor flags (on edit)

- `--editor <editor>`

## Shared Clone flags (on clone)

- `--dupe`

---

## brocli ([src/main-brocli.ts](../src/main-brocli.ts))

The file is empty. The entire implementation needs to be written from scratch.

- [ ] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `code` (alias), `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [ ] Add global flags: `-V,--verbose` (counter), `--config <PATH>`
- [ ] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [ ] Add `--format` output flag to `ls`
- [ ] Add `--editor` flag to `edit`
- [ ] Add `--dupe` flag to `clone`
- [ ] Add brief + detailed docstrings on each command if brocli supports both
- [ ] Add flag grouping if supported
- [ ] Add command grouping (Code / Diagnostic) if supported
- [ ] Add metavars for flags if supported

---

## Clipanion ([src/main-clipanion.ts](../src/main-clipanion.ts))

Currently has: `cd`, `code`

- [x] Add missing commands: `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Make `code` an alias for `edit` (`EditCommand` uses `paths = [["edit"], ["code"]]`)
- [x] Move `code`/`edit` to `category: "Code"` group (was `"Editor"`)
- [x] Add `category: "Code"` to all Code-group commands
- [x] Add `category: "Diagnostic"` to `doctor`
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add `details:` (long description) to all commands
- [ ] Add metavar / placeholder to `--config` — **not supported by clipanion for named options**
- [ ] Add flag grouping for global flags — **not supported by clipanion**

---

## cmd-ts ([src/main-cmd-ts.ts](../src/main-cmd-ts.ts))

Currently has: `cd`, `ls`, `code`, `clone`, `doctor`

- [x] Add missing commands: `shell`, `find`, `edit`, `root`, `nested foo`, `nested bar`
- [x] Add `edit` command with `aliases: ["code"]`; removed standalone `code` command
- [x] Change `verbose` to counter via `multiflag` with a custom `Type<boolean[], number>` (no built-in counter in cmd-ts)
- [x] Make `repo` positional required (`type: c.string` without `c.optional`)
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [ ] Add metavar to `--config` — **not supported by cmd-ts for named options**
- [x] Descriptions provided for all commands (cmd-ts only supports a single `description` field, no separate short/long)
- [ ] Add command grouping (Code / Diagnostic) — **not supported by cmd-ts**

---

## Optique ([src/main-optique.ts](../src/main-optique.ts))

Currently has: `cd`, `ls`, `code`, `clone`, `doctor`, `nested foo`, `nested bar`

- [ ] Add missing commands: `shell`, `find`, `edit`, `root`
- [ ] Add `edit` command; `code` should be an alias
- [ ] Change `--verbose` from a plain boolean option to a counter (stackable up to 3x) — check if optique supports counter flags; if not, document as a limitation
- [ ] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [ ] Add `--format` flag to `ls`
- [ ] Add `--editor` flag to `edit`
- [ ] Add `--dupe` flag to `clone`
- [ ] Add command grouping (Code / Diagnostic) if optique supports it (global flags already use groups)
- [ ] Add detailed docstrings to all commands that only have `description` and are missing `brief`, or vice versa; ensure both `brief` and `description` differ in length/detail per the guidelines

---

## Stricli ([src/main-stricli.ts](../src/main-stricli.ts))

Currently has: `cd`, `code`

- [x] Add missing commands: `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command; `code` registered as a route alias via `aliases: { code: "edit" }` in `buildRouteMap`
- [x] Fix verbose alias: `V: "verbose"` (uppercase)
- [x] Fix `repoArgs`: ORG now has `optional: true`; retyped as `[org: string | undefined, repo: string]`
- [x] Changed `verbose` from `kind: "boolean"` to `kind: "counter"` (natively supported by stricli)
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone` (via `scopeFlagParams`)
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add `fullDescription` to all commands (stricli supports `brief` + `fullDescription`)
- [ ] Command grouping (Code / Diagnostic) — **not supported by stricli**
- [ ] Flag grouping — **not supported by stricli**

---

## Yargs ([src/main-yargs.ts](../src/main-yargs.ts))

Currently has: `cd`, `code`

- [x] Add missing commands: `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command with `aliases: ["code"]` via `.command(["edit [org] <repo>", "code"], ...)`
- [x] Add `--config` as a global option with `global: true` and `group: "Global:"`
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone` (via `addScopeFlags` helper)
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add detailed descriptions via `.epilog()` in each command's builder
- [ ] Command grouping (Code / Diagnostic) — **not supported by yargs for commands, only for flags**
- [x] Flag grouping for scope flags via `.group(["os", "windows", ...], "Scope:")` in `addScopeFlags` helper
- [ ] Metavar for `--config` — **not supported by yargs; shows as `[string]`**
