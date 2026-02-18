import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    alias: o.optional(o.argument(o.string(), { description: o.message`Alias to delete` })),
    all: o.option('--all', { description: o.message`Delete all aliases` }),
  }),
  {
    brief: o.message`Delete set aliases`,
  },
);
