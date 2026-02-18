import * as o from '@optique/core';

export default o.command(
  'cp',
  o.object({
    action: o.constant('cp'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    expand: o.option('-e', '--expand', { description: o.message`Expand remote file globs in remote shell` }),
    profile: o.option('-p', '--profile', o.string(), { description: o.message`Name of the SSH profile to use` }),
    recursive: o.option('-r', '--recursive', { description: o.message`Recursively copy directories` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  }),
  { brief: o.message`Copy files between local and remote file systems` },
);
