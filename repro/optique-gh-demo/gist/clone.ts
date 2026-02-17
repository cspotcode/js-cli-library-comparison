import * as o from '@optique/core';

export default o.command(
  'clone',
  o.object({
    action: o.constant('clone'),
    gist: o.argument(o.string(), { description: o.message`Gist ID or URL` }),
    directory: o.optional(o.argument(o.string(), { description: o.message`Target directory` })),
  }),
  {
    brief: o.message`Clone a gist locally`,
    description: o.message`Clone a GitHub gist locally. Pass additional git clone flags by listing them after --.`,
  },
);
