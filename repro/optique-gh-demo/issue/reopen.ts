import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'reopen',
  o.object({
    action: o.constant('reopen'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    comment: o.option('-c', '--comment', o.string(), { description: o.message`Leave a comment when reopening` }),
    repo: repoFlag,
  }),
  { brief: o.message`Reopen issue` },
);
