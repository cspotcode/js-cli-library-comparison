import * as o from '@optique/core';

export default o.command(
  'rename',
  o.object({
    action: o.constant('rename'),
    gist: o.argument(o.string(), { description: o.message`Gist ID or URL` }),
    oldFilename: o.argument(o.string(), { description: o.message`Old filename` }),
    newFilename: o.argument(o.string(), { description: o.message`New filename` }),
  }),
  {
    brief: o.message`Rename a file in a gist`,
    description: o.message`Rename a file in the given gist ID / URL.`,
  },
);
