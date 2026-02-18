import * as o from '@optique/core';

export default o.command(
  'list',
  o.object({
    action: o.constant('list'),
    limit: o.option('-L', '--limit', o.string(), {
      description: o.message`Maximum number of organizations to list (default 30)`,
    }),
  }),
  {
    brief: o.message`List organizations for the authenticated user`,
  },
);
