import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'rerun',
  o.object({
    action: o.constant('rerun'),
    runId: o.optional(o.argument(o.string(), { description: o.message`Run ID` })),
    debug: o.option('-d', '--debug', { description: o.message`Rerun with debug logging` }),
    failed: o.option('--failed', { description: o.message`Rerun only failed jobs, including dependencies` }),
    job: o.option('-j', '--job', o.string(), { description: o.message`Rerun a specific job ID from a run, including dependencies` }),
    repo: repoFlag,
  }),
  { brief: o.message`Rerun a run` },
);
