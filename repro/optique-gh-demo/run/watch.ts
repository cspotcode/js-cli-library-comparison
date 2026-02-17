import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'watch',
  o.object({
    action: o.constant('watch'),
    runId: o.argument(o.string(), { description: o.message`Run ID` }),
    compact: o.option('--compact', { description: o.message`Show only relevant/failed steps` }),
    exitStatus: o.option('--exit-status', { description: o.message`Exit with non-zero status if run fails` }),
    interval: o.option('-i', '--interval', o.string(), { description: o.message`Refresh interval in seconds (default 3)` }),
    repo: repoFlag,
  }),
  { brief: o.message`Watch a run until it completes, showing its progress` },
);
