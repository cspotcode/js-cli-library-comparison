import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'close',
  o.object({
    action: o.constant('close'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    comment: o.option('-c', '--comment', o.string(), { description: o.message`Leave a closing comment` }),
    deleteBranch: o.option('-d', '--delete-branch', { description: o.message`Delete the local and remote branch after close` }),
    repo: repoFlag,
  }),
  { brief: o.message`Close a pull request` },
);
