import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'enable',
  o.object({
    action: o.constant('enable'),
    workflow: o.optional(o.argument(o.string(), { description: o.message`Workflow ID or name` })),
    repo: repoFlag,
  }),
  {
    brief: o.message`Enable a workflow`,
    description: o.message`Enable a workflow, allowing it to be run and show up when listing workflows.`,
  },
);
