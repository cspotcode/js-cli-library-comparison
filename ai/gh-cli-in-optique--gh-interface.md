# gh CLI Interface Description

Full command tree gathered via recursive `gh <cmd> --help` calls.

## Top-Level Commands

```
gh <command> <subcommand> [flags]

Global flags: --help, --version
```

### CORE COMMANDS
- `auth`     – Authenticate gh and git with GitHub
- `browse`   – Open repositories, issues, PRs, and more in the browser (leaf)
- `codespace`– Connect to and manage codespaces
- `gist`     – Manage gists
- `issue`    – Manage issues
- `org`      – Manage organizations
- `pr`       – Manage pull requests
- `project`  – Work with GitHub Projects
- `release`  – Manage releases
- `repo`     – Manage repositories

### GITHUB ACTIONS COMMANDS
- `cache`    – Manage GitHub Actions caches
- `run`      – View details about workflow runs
- `workflow` – View details about GitHub Actions workflows

### ADDITIONAL COMMANDS
- `alias`      – Create command shortcuts
- `api`        – Make an authenticated GitHub API request (leaf)
- `attestation`– Work with artifact attestations
- `completion` – Generate shell completion scripts (leaf)
- `config`     – Manage configuration for gh
- `extension`  – Manage gh extensions
- `gpg-key`    – Manage GPG keys
- `label`      – Manage labels
- `ruleset`    – View info about repo rulesets
- `search`     – Search for repositories, issues, and pull requests
- `secret`     – Manage GitHub secrets
- `ssh-key`    – Manage SSH keys
- `status`     – Print information about relevant issues, PRs, and notifications (leaf)
- `variable`   – Manage GitHub Actions variables

---

## auth

```
gh auth <command> [flags]
```

| Subcommand   | Description                                              |
|-------------|----------------------------------------------------------|
| `login`      | Log in to a GitHub account                              |
| `logout`     | Log out of a GitHub account                             |
| `refresh`    | Refresh stored authentication credentials               |
| `setup-git`  | Setup git with GitHub CLI                               |
| `status`     | Display active account and authentication state         |
| `switch`     | Switch active GitHub account                            |
| `token`      | Print the authentication token for a hostname/account   |

### auth login
Flags: `-c/--clipboard`, `-p/--git-protocol <string>`, `-h/--hostname <string>`,
`--insecure-storage`, `-s/--scopes <strings>`, `--skip-ssh-key`, `-w/--web`, `--with-token`

### auth logout
Flags: `-h/--hostname <string>`, `-u/--user <string>`

### auth refresh
Flags: `-c/--clipboard`, `-h/--hostname <string>`, `--insecure-storage`,
`-r/--remove-scopes <strings>`, `--reset-scopes`, `-s/--scopes <strings>`

### auth setup-git
Flags: `-f/--force` (must use with `--hostname`), `-h/--hostname <string>`

### auth status
Flags: `-a/--active`, `-h/--hostname <string>`, `--jq <expr>`, `--json <fields>`, `-t/--show-token`, `--template <string>`

### auth switch
Flags: `-h/--hostname <string>`, `-u/--user <string>`

### auth token
Flags: `-h/--hostname <string>`, `-u/--user <string>`

---

## browse (leaf)

```
gh browse [<number> | <path> | <commit-sha>] [flags]
```

Flags: `-b/--branch <string>`, `-c/--commit [<sha>]`, `-n/--no-browser`,
`-p/--projects`, `-r/--releases`, `-R/--repo [HOST/]OWNER/REPO`,
`-s/--settings`, `-w/--wiki`

---

## codespace (alias: cs)

```
gh codespace [flags]
```

| Subcommand | Description                                |
|------------|---------------------------------------------|
| `code`     | Open a codespace in Visual Studio Code      |
| `cp`       | Copy files between local and remote         |
| `create`   | Create a codespace                          |
| `delete`   | Delete codespaces                           |
| `edit`     | Edit a codespace                            |
| `jupyter`  | Open a codespace in JupyterLab              |
| `list`     | List codespaces                             |
| `logs`     | Access codespace logs                       |
| `ports`    | List ports in a codespace (has subcommands) |
| `rebuild`  | Rebuild a codespace                         |
| `ssh`      | SSH into a codespace                        |
| `stop`     | Stop a running codespace                    |
| `view`     | View details about a codespace              |

### codespace code
Flags: `-c/--codespace <string>`, `--insiders`, `-R/--repo <string>`,
`--repo-owner <string>`, `-w/--web`

### codespace cp
Args: `<sources>... <dest>`
Flags: `-c/--codespace <string>`, `-e/--expand`, `-p/--profile <string>`,
`-r/--recursive`, `-R/--repo <string>`, `--repo-owner <string>`

### codespace create
Flags: `-b/--branch <string>`, `--default-permissions`, `--devcontainer-path <string>`,
`-d/--display-name <string>`, `--idle-timeout <duration>`, `-l/--location <string>`,
`-m/--machine <string>`, `-R/--repo <string>`, `--retention-period <duration>`,
`-s/--status`, `-w/--web`

### codespace delete
Flags: `--all`, `-c/--codespace <string>`, `--days <N>`, `-f/--force`,
`-o/--org <login>`, `-R/--repo <string>`, `--repo-owner <string>`, `-u/--user <username>`

### codespace edit
Flags: `-c/--codespace <string>`, `-d/--display-name <string>`, `-m/--machine <string>`,
`-R/--repo <string>`, `--repo-owner <string>`

### codespace list
Flags: `-q/--jq <expr>`, `--json <fields>`, `-L/--limit <int>`, `-o/--org <login>`,
`-R/--repo <string>`, `-t/--template <string>`, `-u/--user <username>`, `-w/--web`

### codespace logs
Flags: `-c/--codespace <string>`, `-f/--follow`, `-R/--repo <string>`, `--repo-owner <string>`

### codespace ports
Flags: `-c/--codespace <string>`, `-q/--jq <expr>`, `--json <fields>`,
`-R/--repo <string>`, `--repo-owner <string>`, `-t/--template <string>`
Subcommands: `forward`, `visibility`

### codespace rebuild
Flags: `-c/--codespace <string>`, `--full`, `-R/--repo <string>`, `--repo-owner <string>`

### codespace ssh
Args: `[<flags>...] [-- <ssh-flags>...] [<command>]`
Flags: `-c/--codespace <string>`, `--config`, `-d/--debug`, `--debug-file <string>`,
`--profile <string>`, `-R/--repo <string>`, `--repo-owner <string>`, `--server-port <int>`

### codespace stop
Flags: `-c/--codespace <string>`, `-o/--org <login>`, `-R/--repo <string>`,
`--repo-owner <string>`, `-u/--user <username>`

### codespace view
Flags: `-c/--codespace <string>`, `-q/--jq <expr>`, `--json <fields>`,
`-R/--repo <string>`, `--repo-owner <string>`, `-t/--template <string>`

---

## gist

| Subcommand | Description               |
|------------|---------------------------|
| `clone`    | Clone a gist locally      |
| `create`   | Create a new gist         |
| `delete`   | Delete a gist             |
| `edit`     | Edit one of your gists    |
| `list`     | List your gists           |
| `rename`   | Rename a file in a gist   |
| `view`     | View a gist               |

### gist clone
Args: `<gist> [<directory>] [-- <gitflags>...]`

### gist create
Args: `[<filename>... | <pattern>... | -]`
Flags: `-d/--desc <string>`, `-f/--filename <string>`, `-p/--public`, `-w/--web`

### gist delete
Args: `{<id> | <url>}`
Flags: `--yes`

### gist edit
Args: `{<id> | <url>} [<filename>]`
Flags: `-a/--add <string>`, `-d/--desc <string>`, `-f/--filename <string>`, `-r/--remove <string>`

### gist list
Flags: `--filter <expression>`, `--include-content`, `-L/--limit <int>`, `--public`, `--secret`

### gist rename
Args: `{<id> | <url>} <old-filename> <new-filename>`

### gist view
Args: `[<id> | <url>]`
Flags: `-f/--filename <string>`, `--files`, `-r/--raw`, `-w/--web`

---

## issue

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

| Subcommand   | Description                          |
|-------------|---------------------------------------|
| `create`     | Create a new issue                   |
| `list`       | List issues in a repository          |
| `status`     | Show status of relevant issues       |
| `close`      | Close issue                          |
| `comment`    | Add a comment to an issue            |
| `delete`     | Delete issue                         |
| `develop`    | Manage linked branches for an issue  |
| `edit`       | Edit issues                          |
| `lock`       | Lock issue conversation              |
| `pin`        | Pin a issue                          |
| `reopen`     | Reopen issue                         |
| `transfer`   | Transfer issue to another repository |
| `unlock`     | Unlock issue conversation            |
| `unpin`      | Unpin a issue                        |
| `view`       | View an issue                        |

### issue create
Flags: `-a/--assignee <login>`, `-b/--body <string>`, `-F/--body-file <file>`,
`-e/--editor`, `-l/--label <name>`, `-m/--milestone <name>`, `-p/--project <title>`,
`--recover <string>`, `-T/--template <name>`, `-t/--title <string>`, `-w/--web`

### issue list
Flags: `--app <string>`, `-a/--assignee <string>`, `-A/--author <string>`,
`-q/--jq <expr>`, `--json <fields>`, `-l/--label <strings>`, `-L/--limit <int>`,
`--mention <string>`, `-m/--milestone <string>`, `-S/--search <query>`,
`-s/--state {open|closed|all}`, `-t/--template <string>`, `-w/--web`

### issue status
Flags: `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`

### issue close
Args: `{<number> | <url>}`
Flags: `-c/--comment <string>`, `-r/--reason {completed|not planned}`

### issue comment
Args: `{<number> | <url>}`
Flags: `-b/--body <text>`, `-F/--body-file <file>`, `--create-if-none`,
`--delete-last`, `--edit-last`, `-e/--editor`, `-w/--web`, `--yes`

### issue delete
Args: `{<number> | <url>}`
Flags: `--yes`

### issue develop
Args: `{<number> | <url>}`
Flags: `-b/--base <string>`, `--branch-repo <string>`, `-c/--checkout`,
`-l/--list`, `-n/--name <string>`

### issue edit
Args: `{<numbers> | <urls>}`
Flags: `--add-assignee <login>`, `--add-label <name>`, `--add-project <title>`,
`-b/--body <string>`, `-F/--body-file <file>`, `-m/--milestone <name>`,
`--remove-assignee <login>`, `--remove-label <name>`, `--remove-milestone`,
`--remove-project <title>`, `-t/--title <string>`

### issue lock
Args: `{<number> | <url>}`
Flags: `-r/--reason <string>`

### issue pin / issue unpin
Args: `{<number> | <url>}`

### issue reopen
Args: `{<number> | <url>}`
Flags: `-c/--comment <string>`

### issue transfer
Args: `{<number> | <url>} <destination-repo>`

### issue unlock
Args: `{<number> | <url>}`

### issue view
Args: `{<number> | <url>}`
Flags: `-c/--comments`, `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`, `-w/--web`

---

## org

### org list
Flags: `-L/--limit <int>`

---

## pr

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

| Subcommand      | Description                              |
|----------------|-------------------------------------------|
| `create`        | Create a pull request                    |
| `list`          | List pull requests in a repository       |
| `status`        | Show status of relevant pull requests    |
| `checkout`      | Check out a pull request in git          |
| `checks`        | Show CI status for a single pull request |
| `close`         | Close a pull request                     |
| `comment`       | Add a comment to a pull request          |
| `diff`          | View changes in a pull request           |
| `edit`          | Edit a pull request                      |
| `lock`          | Lock pull request conversation           |
| `merge`         | Merge a pull request                     |
| `ready`         | Mark a pull request as ready for review  |
| `reopen`        | Reopen a pull request                    |
| `revert`        | Revert a pull request                    |
| `review`        | Add a review to a pull request           |
| `unlock`        | Unlock pull request conversation         |
| `update-branch` | Update a pull request branch             |
| `view`          | View a pull request                      |

### pr create
Flags: `-a/--assignee <login>`, `-B/--base <branch>`, `-b/--body <string>`,
`-F/--body-file <file>`, `-d/--draft`, `--dry-run`, `-e/--editor`, `-f/--fill`,
`--fill-first`, `--fill-verbose`, `-H/--head <branch>`, `-l/--label <name>`,
`-m/--milestone <name>`, `--no-maintainer-edit`, `-p/--project <title>`,
`--recover <string>`, `-r/--reviewer <handle>`, `-T/--template <file>`,
`-t/--title <string>`, `-w/--web`

### pr list
Flags: `--app <string>`, `-a/--assignee <string>`, `-A/--author <string>`,
`-B/--base <string>`, `-d/--draft`, `-H/--head <string>`, `-q/--jq <expr>`,
`--json <fields>`, `-l/--label <strings>`, `-L/--limit <int>`, `-S/--search <query>`,
`-s/--state {open|closed|merged|all}`, `-t/--template <string>`, `-w/--web`

### pr status
Flags: `-c/--conflict-status`, `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`

### pr checkout
Args: `[<number> | <url> | <branch>]`
Flags: `-b/--branch <string>`, `--detach`, `-f/--force`, `--recurse-submodules`

### pr checks
Args: `[<number> | <url> | <branch>]`
Flags: `--fail-fast`, `-i/--interval <int>`, `-q/--jq <expr>`, `--json <fields>`,
`--required`, `-t/--template <string>`, `--watch`, `-w/--web`

### pr close
Args: `{<number> | <url> | <branch>}`
Flags: `-c/--comment <string>`, `-d/--delete-branch`

### pr comment
Args: `[<number> | <url> | <branch>]`
Flags: `-b/--body <text>`, `-F/--body-file <file>`, `--create-if-none`,
`--delete-last`, `--edit-last`, `-e/--editor`, `-w/--web`, `--yes`

### pr diff
Args: `[<number> | <url> | <branch>]`
Flags: `--color {always|never|auto}`, `--name-only`, `--patch`, `-w/--web`

### pr edit
Args: `[<number> | <url> | <branch>]`
Flags: `--add-assignee <login>`, `--add-label <name>`, `--add-project <title>`,
`--add-reviewer <login>`, `-B/--base <branch>`, `-b/--body <string>`,
`-F/--body-file <file>`, `-m/--milestone <name>`, `--remove-assignee <login>`,
`--remove-label <name>`, `--remove-milestone`, `--remove-project <title>`,
`--remove-reviewer <login>`, `-t/--title <string>`

### pr lock
Args: `{<number> | <url>}`
Flags: `-r/--reason <string>`

### pr merge
Args: `[<number> | <url> | <branch>]`
Flags: `--admin`, `-A/--author-email <text>`, `--auto`, `-b/--body <text>`,
`-F/--body-file <file>`, `-d/--delete-branch`, `--disable-auto`,
`--match-head-commit <SHA>`, `-m/--merge`, `-r/--rebase`, `-s/--squash`, `-t/--subject <text>`

### pr ready
Args: `[<number> | <url> | <branch>]`
Flags: `--undo`

### pr reopen
Args: `{<number> | <url> | <branch>}`
Flags: `-c/--comment <string>`

### pr revert
Args: `{<number> | <url> | <branch>}`
Flags: `-b/--body <string>`, `-F/--body-file <file>`, `-d/--draft`, `-t/--title <string>`

### pr review
Args: `[<number> | <url> | <branch>]`
Flags: `-a/--approve`, `-b/--body <string>`, `-F/--body-file <file>`,
`-c/--comment`, `-r/--request-changes`

### pr unlock
Args: `{<number> | <url>}`

### pr update-branch
Args: `[<number> | <url> | <branch>]`
Flags: `--rebase`

### pr view
Args: `[<number> | <url> | <branch>]`
Flags: `-c/--comments`, `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`, `-w/--web`

---

## project

| Subcommand       | Description                                  |
|-----------------|-----------------------------------------------|
| `close`          | Close a project                             |
| `copy`           | Copy a project                              |
| `create`         | Create a project                            |
| `delete`         | Delete a project                            |
| `edit`           | Edit a project                              |
| `field-create`   | Create a field in a project                 |
| `field-delete`   | Delete a field in a project                 |
| `field-list`     | List the fields in a project                |
| `item-add`       | Add a pull request or an issue to a project |
| `item-archive`   | Archive an item in a project                |
| `item-create`    | Create a draft issue item in a project      |
| `item-delete`    | Delete an item from a project by ID         |
| `item-edit`      | Edit an item in a project                   |
| `item-list`      | List the items in a project                 |
| `link`           | Link a project to a repository or a team    |
| `list`           | List the projects for an owner              |
| `mark-template`  | Mark a project as a template                |
| `unlink`         | Unlink a project from a repository or team  |
| `view`           | View a project                              |

Common project flags: `--format {json}`, `-q/--jq <expr>`, `--owner <string>`, `-t/--template <string>`

### project close/delete/view
Args: `[<number>]` + common flags + `--undo` (close only)

### project copy
Args: `[<number>]`
Flags: `--drafts`, `--source-owner <string>`, `--target-owner <string>`, `--title <string>` + common

### project create
Flags: `--owner <string>`, `--title <string>` + common

### project edit
Args: `[<number>]`
Flags: `-d/--description <string>`, `--readme <string>`, `--title <string>`,
`--visibility {PUBLIC|PRIVATE}` + common

### project field-create
Args: `[<number>]`
Flags: `--data-type {TEXT|SINGLE_SELECT|DATE|NUMBER}`, `--name <string>`,
`--owner <string>`, `--single-select-options <strings>` + common

### project field-delete
Flags: `--id <string>` + common

### project field-list
Args: `[<number>]`
Flags: `-L/--limit <int>`, `--owner <string>` + common

### project item-add
Args: `[<number>]`
Flags: `--owner <string>`, `--url <string>` + common

### project item-archive
Args: `[<number>]`
Flags: `--id <string>`, `--owner <string>`, `--undo` + common

### project item-create
Args: `[<number>]`
Flags: `--body <string>`, `--owner <string>`, `--title <string>` + common

### project item-delete
Args: `[<number>]`
Flags: `--id <string>`, `--owner <string>` + common

### project item-edit
Flags: `--body <string>`, `--clear`, `--date <string>`, `--field-id <string>`,
`--id <string>`, `--iteration-id <string>`, `--number <float>`, `--project-id <string>`,
`--single-select-option-id <string>`, `--text <string>`, `--title <string>` + common

### project item-list
Args: `[<number>]`
Flags: `-L/--limit <int>`, `--owner <string>` + common

### project link / unlink
Args: `[<number>]`
Flags: `--owner <string>`, `-R/--repo <string>`, `-T/--team <string>`

### project list
Flags: `--closed`, `--owner <string>`, `-L/--limit <int>`, `-w/--web` + common

### project mark-template
Args: `[<number>]`
Flags: `--owner <string>`, `--undo` + common

---

## release

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

| Subcommand      | Description                                  |
|----------------|-----------------------------------------------|
| `create`        | Create a new release                        |
| `list`          | List releases in a repository               |
| `delete`        | Delete a release                            |
| `delete-asset`  | Delete an asset from a release              |
| `download`      | Download release assets                     |
| `edit`          | Edit a release                              |
| `upload`        | Upload assets to a release                  |
| `view`          | View information about a release            |

### release create
Args: `[<tag>] [<filename>... | <pattern>...]`
Flags: `--discussion-category <string>`, `-d/--draft`, `--fail-on-no-commits`,
`--generate-notes`, `--latest`, `-n/--notes <string>`, `-F/--notes-file <file>`,
`--notes-from-tag`, `--notes-start-tag <string>`, `-p/--prerelease`,
`--target <branch>`, `-t/--title <string>`, `--verify-tag`

### release list
Flags: `--exclude-drafts`, `--exclude-pre-releases`, `-q/--jq <expr>`, `--json <fields>`,
`-L/--limit <int>`, `-O/--order {asc|desc}`, `-t/--template <string>`

### release delete
Args: `<tag>`
Flags: `--cleanup-tag`, `-y/--yes`

### release delete-asset
Args: `<tag> <asset-name>`
Flags: `-y/--yes`

### release download
Args: `[<tag>]`
Flags: `-A/--archive <format>`, `--clobber`, `-D/--dir <directory>`,
`-O/--output <file>`, `-p/--pattern <stringArray>`, `--skip-existing`

### release edit
Args: `<tag>`
Flags: `--discussion-category <string>`, `--draft`, `--latest`, `-n/--notes <string>`,
`-F/--notes-file <file>`, `--prerelease`, `--tag <string>`, `--target <branch>`,
`-t/--title <string>`, `--verify-tag`

### release upload
Args: `<tag> <files>...`
Flags: `--clobber`

### release view
Args: `[<tag>]`
Flags: `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`, `-w/--web`

---

## repo

| Subcommand     | Description                               |
|---------------|-------------------------------------------|
| `create`       | Create a new repository                  |
| `list`         | List repositories owned by user or org   |
| `archive`      | Archive a repository                     |
| `autolink`     | Manage autolink references               |
| `clone`        | Clone a repository locally               |
| `delete`       | Delete a repository                      |
| `deploy-key`   | Manage deploy keys in a repository       |
| `edit`         | Edit repository settings                 |
| `fork`         | Create a fork of a repository            |
| `gitignore`    | List and view repository gitignore templates |
| `license`      | Explore repository licenses              |
| `rename`       | Rename a repository                      |
| `set-default`  | Configure default repository             |
| `sync`         | Sync a repository                        |
| `unarchive`    | Unarchive a repository                   |
| `view`         | View a repository                        |

### repo create
Args: `[<name>]`
Flags: `--add-readme`, `-c/--clone`, `-d/--description <string>`, `--disable-issues`,
`--disable-wiki`, `-g/--gitignore <string>`, `-h/--homepage <URL>`,
`--include-all-branches`, `--internal`, `-l/--license <string>`, `--private`,
`--public`, `--push`, `-r/--remote <string>`, `-s/--source <string>`,
`-t/--team <name>`, `-p/--template <repository>`

### repo list
Args: `[<owner>]`
Flags: `--archived`, `--fork`, `-q/--jq <expr>`, `--json <fields>`, `-l/--language <string>`,
`-L/--limit <int>`, `--no-archived`, `--source`, `-t/--template <string>`,
`--topic <strings>`, `--visibility {public|private|internal}`

### repo archive / unarchive
Args: `[<repository>]`
Flags: `-y/--yes`

### repo clone
Args: `<repository> [<directory>] [-- <gitflags>...]`
Flags: `-u/--upstream-remote-name <string>`

### repo delete
Args: `[<repository>]`
Flags: `--yes`

### repo edit
Args: `[<repository>]`
Flags: `--accept-visibility-change-consequences`, `--add-topic <strings>`,
`--allow-forking`, `--allow-update-branch`, `--default-branch <name>`,
`--delete-branch-on-merge`, `-d/--description <string>`,
`--enable-advanced-security`, `--enable-auto-merge`, `--enable-discussions`,
`--enable-issues`, `--enable-merge-commit`, `--enable-projects`,
`--enable-rebase-merge`, `--enable-secret-scanning`,
`--enable-secret-scanning-push-protection`, `--enable-squash-merge`,
`--enable-wiki`, `-h/--homepage <URL>`, `--remove-topic <strings>`,
`--template`, `--visibility {public,private,internal}`

### repo fork
Args: `[<repository>] [-- <gitflags>...]`
Flags: `--clone`, `--default-branch-only`, `--fork-name <string>`,
`--org <string>`, `--remote`, `--remote-name <string>`

### repo rename
Args: `[<new-name>]`
Flags: `-R/--repo [HOST/]OWNER/REPO`, `-y/--yes`

### repo set-default
Args: `[<repository>]`
Flags: `-u/--unset`, `-v/--view`

### repo sync
Args: `[<destination-repository>]`
Flags: `-b/--branch <string>`, `--force`, `-s/--source <string>`

### repo view
Args: `[<repository>]`
Flags: `-b/--branch <string>`, `-q/--jq <expr>`, `--json <fields>`, `-t/--template <string>`, `-w/--web`

---

## cache

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### cache delete
Args: `[<cache-id> | <cache-key> | --all]`
Flags: `-a/--all`, `-r/--ref <string>`, `--succeed-on-no-caches`

### cache list
Flags: `-q/--jq <expr>`, `--json <fields>`, `-k/--key <string>`, `-L/--limit <int>`,
`-O/--order {asc|desc}`, `-r/--ref <string>`, `-S/--sort {created_at|last_accessed_at|size_in_bytes}`,
`-t/--template <string>`

---

## run

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

| Subcommand  | Description                        |
|-------------|-------------------------------------|
| `cancel`    | Cancel a workflow run              |
| `delete`    | Delete a workflow run              |
| `download`  | Download artifacts                 |
| `list`      | List recent workflow runs          |
| `rerun`     | Rerun a run                        |
| `view`      | View a summary of a workflow run   |
| `watch`     | Watch a run until it completes     |

### run cancel
Args: `[<run-id>]`
Flags: `--force`

### run delete
Args: `[<run-id>]`

### run download
Args: `[<run-id>]`
Flags: `-D/--dir <string>`, `-n/--name <stringArray>`, `-p/--pattern <stringArray>`

### run list
Flags: `-a/--all`, `-b/--branch <string>`, `-c/--commit <SHA>`, `--created <date>`,
`-e/--event <event>`, `-q/--jq <expr>`, `--json <fields>`, `-L/--limit <int>`,
`-s/--status <string>`, `-t/--template <string>`, `-u/--user <string>`, `-w/--workflow <string>`

### run rerun
Args: `[<run-id>]`
Flags: `-d/--debug`, `--failed`, `-j/--job <string>`

### run view
Args: `[<run-id>]`
Flags: `-a/--attempt <uint>`, `--exit-status`, `-j/--job <string>`, `-q/--jq <expr>`,
`--json <fields>`, `--log`, `--log-failed`, `-t/--template <string>`, `-v/--verbose`, `-w/--web`

### run watch
Args: `<run-id>`
Flags: `--compact`, `--exit-status`, `-i/--interval <int>`

---

## workflow

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### workflow disable / enable
Args: `[<workflow-id> | <workflow-name>]`

### workflow list
Flags: `-a/--all`, `-q/--jq <expr>`, `--json <fields>`, `-L/--limit <int>`, `-t/--template <string>`

### workflow run
Args: `[<workflow-id> | <workflow-name>]`
Flags: `-F/--field <key=value>`, `--json`, `-f/--raw-field <key=value>`, `-r/--ref <string>`

### workflow view
Args: `[<workflow-id> | <workflow-name> | <filename>]`
Flags: `-r/--ref <string>`, `-w/--web`, `-y/--yaml`

---

## alias

| Subcommand | Description                     |
|------------|----------------------------------|
| `delete`   | Delete set aliases              |
| `import`   | Import aliases from a YAML file |
| `list`     | List your aliases               |
| `set`      | Create a shortcut for a gh command |

### alias delete
Args: `{<alias> | --all}`
Flags: `--all`

### alias import
Args: `[<filename> | -]`
Flags: `--clobber`

### alias list
(no flags)

### alias set
Args: `<alias> <expansion>`
Flags: `--clobber`, `-s/--shell`

---

## api (leaf)

```
gh api <endpoint> [flags]
```

Flags: `--cache <duration>`, `-F/--field <key=value>`, `-H/--header <key:value>`,
`--hostname <string>`, `-i/--include`, `--input <file>`, `-q/--jq <string>`,
`-X/--method <string>`, `--paginate`, `-p/--preview <strings>`,
`-f/--raw-field <key=value>`, `--silent`, `--slurp`, `-t/--template <string>`, `--verbose`

---

## attestation

| Subcommand      | Description                                       |
|----------------|---------------------------------------------------|
| `download`      | Download an artifact's attestations               |
| `trusted-root`  | Output trusted_root.jsonl contents                |
| `verify`        | Verify an artifact's integrity using attestations |

### attestation download
Args: `[<file-path> | oci://<image-uri>]`
Flags: `-d/--digest-alg {sha256|sha512}`, `--hostname <string>`, `-L/--limit <int>`,
`-o/--owner <string>`, `--predicate-type <string>`, `-R/--repo <string>`

### attestation trusted-root
Flags: `--hostname <string>`, `--tuf-root <string>`, `--tuf-url <string>`, `--verify-only`

### attestation verify
Args: `[<file-path> | oci://<image-uri>]`
Flags: `-b/--bundle <string>`, `--bundle-from-oci`, `--cert-identity <string>`,
`-i/--cert-identity-regex <string>`, `--cert-oidc-issuer <string>`,
`--custom-trusted-root <string>`, `--deny-self-hosted-runners`, `-d/--digest-alg {sha256|sha512}`,
`--format {json}`, `--hostname <string>`, `-q/--jq <expr>`, `-L/--limit <int>`,
`--no-public-good`, `-o/--owner <string>`, `--predicate-type <string>`, `-R/--repo <string>`,
`--signer-digest <string>`, `--signer-repo <string>`, `--signer-workflow <string>`,
`--source-digest <string>`, `--source-ref <string>`, `-t/--template <string>`

---

## completion (leaf)

```
gh completion -s <shell>
```

Flags: `-s/--shell {bash|zsh|fish|powershell}`

---

## config

| Subcommand     | Description                                   |
|---------------|-----------------------------------------------|
| `clear-cache`  | Clear the cli cache                          |
| `get`          | Print the value of a given configuration key |
| `list`         | Print a list of configuration keys and values |
| `set`          | Update configuration with a value for the key |

### config clear-cache
(no flags)

### config get
Args: `<key>`
Flags: `-h/--host <string>`

### config list
Flags: `-h/--host <string>`

### config set
Args: `<key> <value>`
Flags: `-h/--host <string>`

---

## extension (aliases: extensions, ext)

| Subcommand  | Description                                 |
|-------------|----------------------------------------------|
| `browse`    | Enter a UI for browsing, adding, removing    |
| `create`    | Create a new extension                       |
| `exec`      | Execute an installed extension               |
| `install`   | Install a gh extension from a repository     |
| `list`      | List installed extension commands            |
| `remove`    | Remove an installed extension                |
| `search`    | Search extensions to the GitHub CLI          |
| `upgrade`   | Upgrade installed extensions                 |

### extension browse
Flags: `--debug`, `-s/--single-column`

### extension create
Args: `[<name>]`
Flags: `--precompiled {go|other}`

### extension exec
Args: `<name> [args]` (note: `--help` is parsed as extension name)

### extension install
Args: `<repository>`
Flags: `--force`, `--pin <string>`

### extension list
(no flags)

### extension remove
Args: `<name>`

### extension search
Args: `[<query>]`
Flags: `-q/--jq <expr>`, `--json <fields>`, `--license <strings>`,
`-L/--limit <int>`, `--order {asc|desc}`, `--owner <strings>`,
`--sort {forks|help-wanted-issues|stars|updated}`, `-t/--template <string>`, `-w/--web`

### extension upgrade
Args: `{<name> | --all}`
Flags: `--all`, `--dry-run`, `--force`

---

## gpg-key

| Subcommand | Description                               |
|------------|-------------------------------------------|
| `add`      | Add a GPG key to your GitHub account      |
| `delete`   | Delete a GPG key from your GitHub account |
| `list`     | Lists GPG keys in your GitHub account     |

### gpg-key add
Args: `[<key-file>]`
Flags: `-t/--title <string>`

### gpg-key delete
Args: `<key-id>`
Flags: `-y/--yes`

### gpg-key list
(no flags)

---

## label

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### label clone
Args: `<source-repository>`
Flags: `-f/--force`

### label create
Args: `<name>`
Flags: `-c/--color <string>`, `-d/--description <string>`, `-f/--force`

### label delete
Args: `<name>`
Flags: `--yes`

### label edit
Args: `<name>`
Flags: `-c/--color <string>`, `-d/--description <string>`, `-n/--name <string>`

### label list
Flags: `-q/--jq <expr>`, `--json <fields>`, `-L/--limit <int>`, `--order {asc|desc}`,
`-S/--search <string>`, `--sort {created|name}`, `-t/--template <string>`, `-w/--web`

---

## ruleset

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### ruleset check
Args: `[<branch>]`
Flags: `--default`, `-w/--web`

### ruleset list
Flags: `-L/--limit <int>`, `-o/--org <string>`, `-p/--parents`, `-w/--web`

### ruleset view
Args: `[<ruleset-id>]`
Flags: `-o/--org <string>`, `-p/--parents`, `-w/--web`

---

## search

| Subcommand | Description                     |
|------------|----------------------------------|
| `code`     | Search within code              |
| `commits`  | Search for commits              |
| `issues`   | Search for issues               |
| `prs`      | Search for pull requests        |
| `repos`    | Search for repositories         |

All search subcommands support: `-q/--jq <expr>`, `--json <fields>`, `-L/--limit <int>`,
`-t/--template <string>`, `-w/--web`

### search code
Args: `<query>`
Flags: `--extension <string>`, `--filename <string>`, `--language <string>`,
`--match {file|path}`, `--owner <strings>`, `-R/--repo <strings>`, `--size <string>`

### search commits
Args: `<query>`
Flags: `--author <string>`, `--author-date <date>`, `--author-email <string>`,
`--author-name <string>`, `--committer <string>`, `--committer-date <date>`,
`--committer-email <string>`, `--committer-name <string>`, `--hash <string>`,
`--merge`, `--order {asc|desc}`, `--owner <strings>`, `--parent <string>`,
`-R/--repo <strings>`, `--sort {author-date|committer-date}`, `--tree <string>`, `--visibility {public|private|internal}`

### search issues / prs
Args: `[<query>]`
Flags: `--app <string>`, `--archived`, `-a/--assignee <string>`, `-A/--author <string>`,
`--closed <date>`, `--created <date>`, `--include-prs` (issues), `--interactions <int>`,
`--involves <string>`, `-l/--label <strings>`, `--language <string>`, `--locked`,
`--match {title|body|comments}`, `--mentions <string>`, `--milestone <string>`,
`--no-assignee`, `--no-label`, `--no-milestone`, `--no-project`,
`--order {asc|desc}`, `--owner <strings>`, `--project <string>`,
`-R/--repo <strings>`, `--reactions <int>`, `--sort {comments|created|interactions|reactions|reactions-+1|reactions--1|reactions-heart|reactions-tada|reactions-thinking_face|updated}`,
`--state {open|closed}`, `--team-mentions <string>`, `--updated <date>`,
`--visibility {public|private|internal}`

### search repos
Args: `[<query>]`
Flags: `--archived`, `--created <date>`, `--followers <int>`, `--forks <int>`,
`--good-first-issues <int>`, `--help-wanted-issues <int>`, `--include-forks {false|true|only}`,
`--language <string>`, `--license <strings>`, `--match {name|description|readme}`,
`--number-topics <int>`, `--order {asc|desc}`, `--owner <strings>`, `--size <string>`,
`--sort {forks|help-wanted-issues|stars|updated}`, `--stars <int>`, `--topic <strings>`,
`--updated <date>`, `--visibility {public|private|internal}`

---

## secret

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### secret delete
Args: `<secret-name>`
Flags: `-e/--env <string>`, `-o/--org <string>`, `-u/--user`

### secret list
Flags: `-e/--env <string>`, `-q/--jq <expr>`, `--json <fields>`, `-o/--org <string>`,
`-t/--template <string>`, `-u/--user`

### secret set
Args: `<secret-name>`
Flags: `-b/--body <string>`, `-e/--env <string>`, `-f/--env-file <file>`,
`--no-store`, `-o/--org <string>`, `-r/--repos <repositories>`,
`-u/--user`, `--visibility {all|private|selected}`

---

## ssh-key

| Subcommand | Description                               |
|------------|-------------------------------------------|
| `add`      | Add an SSH key to your GitHub account     |
| `delete`   | Delete an SSH key from your GitHub account |
| `list`     | Lists SSH keys in your GitHub account     |

### ssh-key add
Args: `[<key-file>]`
Flags: `-t/--title <string>`, `--type {authentication|signing}`

### ssh-key delete
Args: `<id>`
Flags: `-y/--yes`

### ssh-key list
(no flags)

---

## status (leaf)

```
gh status [flags]
```

Flags: `-e/--exclude <strings>`, `-o/--org <string>`

---

## variable

Inherited flag: `-R/--repo [HOST/]OWNER/REPO`

### variable delete
Args: `<variable-name>`
Flags: `-e/--env <string>`, `-o/--org <string>`

### variable get
Args: `<variable-name>`
Flags: `-e/--env <string>`, `-o/--org <string>`, `-q/--jq <expr>`,
`--json <fields>`, `-t/--template <string>`

### variable list
Flags: `-e/--env <string>`, `-q/--jq <expr>`, `--json <fields>`,
`-o/--org <string>`, `-t/--template <string>`

### variable set
Args: `<variable-name>`
Flags: `-b/--body <string>`, `-e/--env <string>`, `-f/--env-file <file>`,
`-o/--org <string>`, `-r/--repos <repositories>`, `--visibility {all|private|selected}`
