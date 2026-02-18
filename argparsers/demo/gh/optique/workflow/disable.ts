import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'disable',
  o.object({
    action: o.constant('disable'),
    workflow: o.optional(o.argument(o.string(), { description: o.message`Workflow ID or name` })),
    repo: repoFlag,
  }),
  {
    brief: o.message`Disable a workflow`,
    description: o.message`Disable a workflow, preventing it from running or showing up when listing workflows.`,
  },
);
