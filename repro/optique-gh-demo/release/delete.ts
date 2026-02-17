import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    tag: o.argument(o.string(), { description: o.message`Tag name` }),
    cleanupTag: o.option('--cleanup-tag', { description: o.message`Delete the specified tag in addition to its release` }),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Delete a release` },
);
