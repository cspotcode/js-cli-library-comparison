import * as o from '@optique/core';

export default o.command(
  'rebuild',
  o.object({
    action: o.constant('rebuild'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    full: o.option('--full', { description: o.message`Perform a full rebuild` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  }),
  { brief: o.message`Rebuild a codespace` },
);
