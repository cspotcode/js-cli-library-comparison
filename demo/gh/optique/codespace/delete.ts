import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    all: o.option('--all', { description: o.message`Delete all codespaces` }),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    days: o.option('--days', o.string(), { description: o.message`Delete codespaces older than N days` }),
    force: o.option('-f', '--force', { description: o.message`Skip confirmation for codespaces that contain unsaved changes` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`The login handle of the organization` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
    user: o.option('-u', '--user', o.string(), { description: o.message`The username to delete codespaces for (used with --org)` }),
  }),
  { brief: o.message`Delete codespaces` },
);
