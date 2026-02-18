import * as o from '@optique/core';

export default o.command(
  'remove',
  o.object({
    action: o.constant('remove'),
    name: o.argument(o.string(), { description: o.message`Extension name` }),
  }),
  { brief: o.message`Remove an installed extension` },
);
