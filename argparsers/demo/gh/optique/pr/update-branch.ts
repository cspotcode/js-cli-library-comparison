import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'update-branch',
  o.object({
    action: o.constant('update-branch'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    rebase: o.option('--rebase', { description: o.message`Update PR branch by rebasing on top of the base branch` }),
    repo: repoFlag,
  }),
  { brief: o.message`Update a pull request branch` },
);
