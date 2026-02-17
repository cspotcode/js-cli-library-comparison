import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'lock',
  o.object({
    action: o.constant('lock'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    reason: o.option('-r', '--reason', o.string(), { description: o.message`Optional reason for locking conversation (off-topic, resolved, spam, too heated)` }),
    repo: repoFlag,
  }),
  { brief: o.message`Lock pull request conversation` },
);
