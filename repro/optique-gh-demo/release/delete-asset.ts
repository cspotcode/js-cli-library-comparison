import * as o from '@optique/core';

export default o.command(
  'delete-asset',
  o.object({
    action: o.constant('delete-asset'),
    tag: o.argument(o.string(), { description: o.message`Tag name` }),
    assetName: o.argument(o.string(), { description: o.message`Asset name` }),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Delete an asset from a release` },
);
