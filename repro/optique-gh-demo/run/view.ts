import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('view'),
      runId: o.optional(o.argument(o.string(), { description: o.message`Run ID` })),
      attempt: o.option('-a', '--attempt', o.string(), { description: o.message`The attempt number of the workflow run` }),
      exitStatus: o.option('--exit-status', { description: o.message`Exit with non-zero status if run failed` }),
      job: o.option('-j', '--job', o.string(), { description: o.message`View a specific job ID from a run` }),
      log: o.option('--log', { description: o.message`View full log for either a run or specific job` }),
      logFailed: o.option('--log-failed', { description: o.message`View the log for any failed steps in a run or specific job` }),
      verbose: o.option('-v', '--verbose', { description: o.message`Show job steps` }),
      web: o.option('-w', '--web', { description: o.message`Open run in the browser` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`View a summary of a workflow run` },
);
