import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'reopen',
  o.object({
    action: o.constant('reopen'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    comment: o.option('-c', '--comment', o.string(), { description: o.message`Add a reopening comment` }),
    repo: repoFlag,
  }),
  { brief: o.message`Reopen a pull request` },
);
