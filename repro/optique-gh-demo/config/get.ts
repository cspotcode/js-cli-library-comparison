import * as o from '@optique/core';

export default o.command(
  'get',
  o.object({
    action: o.constant('get'),
    key: o.argument(o.string(), { description: o.message`Configuration key` }),
    host: o.option('-h', '--host', o.string(), {
      description: o.message`Get per-host setting`,
    }),
  }),
  {
    brief: o.message`Print the value of a given configuration key`,
  },
);
