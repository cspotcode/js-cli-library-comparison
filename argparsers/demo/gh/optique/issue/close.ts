import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'close',
  o.object({
    action: o.constant('close'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    comment: o.option('-c', '--comment', o.string(), { description: o.message`Leave a closing comment` }),
    reason: o.option('-r', '--reason', o.string(), { description: o.message`Reason for closing: {completed|not planned}` }),
    repo: repoFlag,
  }),
  { brief: o.message`Close issue` },
);
