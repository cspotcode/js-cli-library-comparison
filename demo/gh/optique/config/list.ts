import * as o from '@optique/core';

export default o.command(
  'list',
  o.object({
    action: o.constant('list'),
    host: o.option('-h', '--host', o.string(), {
      description: o.message`Get per-host configuration`,
    }),
  }),
  {
    brief: o.message`Print a list of configuration keys and values`,
  },
);
