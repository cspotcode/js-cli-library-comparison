import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'pin',
  o.object({
    action: o.constant('pin'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    repo: repoFlag,
  }),
  { brief: o.message`Pin a issue` },
);
