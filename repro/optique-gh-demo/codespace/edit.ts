import * as o from '@optique/core';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    displayName: o.option('-d', '--display-name', o.string(), { description: o.message`Set the display name` }),
    machine: o.option('-m', '--machine', o.string(), { description: o.message`Set hardware specifications for the VM` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  }),
  { brief: o.message`Edit a codespace` },
);
