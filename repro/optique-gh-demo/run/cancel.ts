import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'cancel',
  o.object({
    action: o.constant('cancel'),
    runId: o.optional(o.argument(o.string(), { description: o.message`Run ID` })),
    force: o.option('--force', { description: o.message`Force cancel a workflow run` }),
    repo: repoFlag,
  }),
  { brief: o.message`Cancel a workflow run` },
);
