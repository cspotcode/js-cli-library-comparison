import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'develop',
  o.object({
    action: o.constant('develop'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    base: o.option('-b', '--base', o.string(), { description: o.message`Name of the remote branch you want to make your new branch from` }),
    branchRepo: o.option('--branch-repo', o.string(), { description: o.message`Name or URL of the repository where you want to create your new branch` }),
    checkout: o.option('-c', '--checkout', { description: o.message`Checkout the branch after creating it` }),
    list: o.option('-l', '--list', { description: o.message`List linked branches for the issue` }),
    name: o.option('-n', '--name', o.string(), { description: o.message`Name of the branch to create` }),
    repo: repoFlag,
  }),
  { brief: o.message`Manage linked branches for an issue` },
);
