import * as o from '@optique/core';

export default o.command(
  'logs',
  o.object({
    action: o.constant('logs'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    follow: o.option('-f', '--follow', { description: o.message`Tail and follow the logs` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  }),
  { brief: o.message`Access codespace logs` },
);
