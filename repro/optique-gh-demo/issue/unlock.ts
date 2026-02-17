import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'unlock',
  o.object({
    action: o.constant('unlock'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    repo: repoFlag,
  }),
  { brief: o.message`Unlock issue conversation` },
);
