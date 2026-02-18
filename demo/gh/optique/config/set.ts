import * as o from '@optique/core';

export default o.command(
  'set',
  o.object({
    action: o.constant('set'),
    key: o.argument(o.string(), { description: o.message`Configuration key` }),
    value: o.argument(o.string(), { description: o.message`Configuration value` }),
    host: o.option('-h', '--host', o.string(), {
      description: o.message`Set per-host setting`,
    }),
  }),
  {
    brief: o.message`Update configuration with a value for the given key`,
  },
);
