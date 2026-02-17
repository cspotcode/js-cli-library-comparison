import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'lock',
  o.object({
    action: o.constant('lock'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    reason: o.option('-r', '--reason', o.string(), { description: o.message`Optional reason for locking conversation (off-topic, resolved, spam, too heated)` }),
    repo: repoFlag,
  }),
  { brief: o.message`Lock issue conversation` },
);
