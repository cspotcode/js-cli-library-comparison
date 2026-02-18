import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'transfer',
  o.object({
    action: o.constant('transfer'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    destinationRepo: o.argument(o.string(), { description: o.message`Destination repository` }),
    repo: repoFlag,
  }),
  { brief: o.message`Transfer issue to another repository` },
);
