import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    target: o.optional(o.argument(o.string(), { description: o.message`Cache ID or key` })),
    all: o.option('-a', '--all', { description: o.message`Delete all caches` }),
    ref: o.option('-r', '--ref', o.string(), {
      description: o.message`Delete by cache key and ref, formatted as refs/heads/<branch name> or refs/pull/<number>/merge`,
    }),
    succeedOnNoCaches: o.option('--succeed-on-no-caches', {
      description: o.message`Return exit code 0 if no caches found. Must be used in conjunction with --all`,
    }),
    repo: repoFlag,
  }),
  {
    brief: o.message`Delete GitHub Actions caches`,
  },
);
