import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      all: o.option('-a', '--all', { description: o.message`Include disabled workflows` }),
      branch: o.option('-b', '--branch', o.string(), { description: o.message`Filter runs by branch` }),
      commit: o.option('-c', '--commit', o.string(), { description: o.message`Filter runs by the SHA of the commit` }),
      created: o.option('--created', o.string(), { description: o.message`Filter runs by the date it was created` }),
      event: o.option('-e', '--event', o.string(), { description: o.message`Filter runs by which event triggered the run` }),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of runs to fetch (default 20)` }),
      status: o.option('-s', '--status', o.string(), { description: o.message`Filter runs by status: {queued|completed|in_progress|requested|waiting|pending|action_required|cancelled|failure|neutral|skipped|stale|startup_failure|success|timed_out}` }),
      user: o.option('-u', '--user', o.string(), { description: o.message`Filter runs by user who triggered the run` }),
      workflow: o.option('-w', '--workflow', o.string(), { description: o.message`Filter runs by workflow` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List recent workflow runs` },
);
