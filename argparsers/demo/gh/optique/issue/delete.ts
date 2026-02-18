import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    yes: o.option('--yes', { description: o.message`Confirm deletion without prompting` }),
    repo: repoFlag,
  }),
  { brief: o.message`Delete issue` },
);
