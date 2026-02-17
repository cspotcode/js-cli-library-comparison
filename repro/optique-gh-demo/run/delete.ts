import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    runId: o.optional(o.argument(o.string(), { description: o.message`Run ID` })),
    repo: repoFlag,
  }),
  { brief: o.message`Delete a workflow run` },
);
