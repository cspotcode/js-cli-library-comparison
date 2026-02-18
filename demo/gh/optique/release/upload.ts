import * as o from '@optique/core';

export default o.command(
  'upload',
  o.object({
    action: o.constant('upload'),
    tag: o.argument(o.string(), { description: o.message`Tag name` }),
    clobber: o.option('--clobber', { description: o.message`Overwrite existing assets of the same name` }),
  }),
  { brief: o.message`Upload assets to a release` },
);
