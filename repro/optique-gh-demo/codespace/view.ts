import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
  })),
  { brief: o.message`View details about a codespace` },
);
