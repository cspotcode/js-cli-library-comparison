import * as o from '@optique/core';

export default o.command(
  'sync',
  o.object({
    action: o.constant('sync'),
    destination: o.optional(o.argument(o.string(), { description: o.message`Destination repository` })),
    branch: o.option('-b', '--branch', o.string(), { description: o.message`Branch to sync (default [default branch])` }),
    force: o.option('--force', { description: o.message`Hard reset the branch of the destination repository to match the source repository` }),
    source: o.option('-s', '--source', o.string(), { description: o.message`Source repository` }),
  }),
  { brief: o.message`Sync a repository` },
);
