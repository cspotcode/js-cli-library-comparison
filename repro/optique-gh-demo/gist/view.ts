import * as o from '@optique/core';

export default o.command(
  'view',
  o.object({
    action: o.constant('view'),
    gist: o.optional(o.argument(o.string(), { description: o.message`Gist ID or URL` })),
    filename: o.option('-f', '--filename', o.string(), {
      description: o.message`Display a single file from the gist`,
    }),
    files: o.option('--files', {
      description: o.message`List file names from the gist`,
    }),
    raw: o.option('-r', '--raw', {
      description: o.message`Print raw instead of rendered gist contents`,
    }),
    web: o.option('-w', '--web', {
      description: o.message`Open gist in the browser`,
    }),
  }),
  {
    brief: o.message`View a gist`,
    description: o.message`View the given gist or select from recent gists.`,
  },
);
