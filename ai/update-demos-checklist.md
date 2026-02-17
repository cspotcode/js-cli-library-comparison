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

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `code` (alias), `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add global flags: `-V,--verbose` (number workaround — no counter type in brocli), `--config <PATH>`
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [x] Add `--format` output flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add brief + detailed docstrings (`shortDesc` + `desc`) on each command
- [ ] Flag grouping — **not supported by brocli**
- [ ] Command grouping (Code / Diagnostic) — **not supported by brocli**
- [x] Metavars: not applicable (brocli uses positional names as display names)

---

## Clipanion ([src/main-clipanion.ts](../src/main-clipanion.ts))

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Make `code` an alias for `edit` (`EditCommand` uses `paths = [["edit"], ["code"]]`)
- [x] Add `category: "Code"` to all Code-group commands
- [x] Add `category: "Diagnostic"` to `doctor`
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add `details:` (long description) to all commands
- [ ] Metavar / placeholder on `--config` — **not supported by clipanion for named options**
- [ ] Flag grouping for global flags — **not supported by clipanion**

---

## cmd-ts ([src/main-cmd-ts.ts](../src/main-cmd-ts.ts))

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command with `aliases: ["code"]`; removed standalone `code` command
- [x] Change `verbose` to counter via `multiflag` with a custom `Type<boolean[], number>` (no built-in counter in cmd-ts)
- [x] Make `repo` positional required
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone`
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Descriptions provided for all commands (cmd-ts only supports a single `description` field, no separate short/long)
- [ ] Metavar on `--config` — **not supported by cmd-ts for named options**
- [ ] Command grouping (Code / Diagnostic) — **not supported by cmd-ts**

---

## Optique ([src/main-optique.ts](../src/main-optique.ts))

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command; `code` is a hidden duplicate (optique has no native alias support)
- [x] Change `--verbose` to counter via `multiple() + map()` (no built-in counter; workaround counts repeated flags)
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone` (via `scopeFlags` spread + `group("Scope:", ...)` per field)
- [x] Add `--format` flag to `ls` (under `"Output:"` group)
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add command grouping via `group("Code:", command(...))` and `group("Diagnostic:", command(...))`
- [x] Add `brief` + `description` to all commands

---

## Stricli ([src/main-stricli.ts](../src/main-stricli.ts))

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command; `code` registered as a route alias via `aliases: { code: "edit" }` in `buildRouteMap`
- [x] Fix verbose alias: `V: "verbose"` (uppercase)
- [x] ORG positional has `optional: true`
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

- [x] Add all commands: `cd`, `shell`, `ls`, `find`, `edit`, `clone`, `root`, `nested foo`, `nested bar`, `doctor`
- [x] Add `edit` command with `aliases: ["code"]` via `.command(["edit [org] <repo>", "code"], ...)`
- [x] Add `--config` as a global option with `global: true` and `group: "Global:"`
- [x] Add scope flags to: `cd`, `shell`, `ls`, `find`, `edit`, `root`, `clone` (via `addScopeFlags` helper)
- [x] Add `--format` flag to `ls`
- [x] Add `--editor` flag to `edit`
- [x] Add `--dupe` flag to `clone`
- [x] Add detailed descriptions via `.epilog()` in each command's builder
- [x] Flag grouping for scope flags via `.group([...], "Scope:")` in `addScopeFlags` helper
- [ ] Command grouping (Code / Diagnostic) — **not supported by yargs for commands, only for flags**
- [ ] Metavar for `--config` — **not supported by yargs; shows as `[string]`**
