import * as o from '@optique/core';

export default o.command(
  'code',
  o.object({
    action: o.constant('code'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    insiders: o.option('--insiders', { description: o.message`Use the insiders version of VS Code` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  }),
  { brief: o.message`Open a codespace in Visual Studio Code` },
);
