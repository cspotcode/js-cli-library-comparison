import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    name: o.argument(o.string(), { description: o.message`Label name` }),
    yes: o.option('--yes', { description: o.message`Confirm deletion without prompting` }),
    repo: repoFlag,
  }),
  { brief: o.message`Delete a label from a repository` },
);
