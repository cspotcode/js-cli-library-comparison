import * as o from '@optique/core';

export default o.command(
  'stop',
  o.object({
    action: o.constant('stop'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`The login handle of the organization` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
    user: o.option('-u', '--user', o.string(), { description: o.message`The username to stop codespace for (used with --org)` }),
  }),
  { brief: o.message`Stop a running codespace` },
);
