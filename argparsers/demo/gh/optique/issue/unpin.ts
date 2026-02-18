import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'unpin',
  o.object({
    action: o.constant('unpin'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    repo: repoFlag,
  }),
  { brief: o.message`Unpin a issue` },
);
