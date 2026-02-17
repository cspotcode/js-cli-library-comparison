import * as o from '@optique/core';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    name: o.optional(o.argument(o.string(), { description: o.message`Extension name` })),
    precompiled: o.option('--precompiled', o.string(), { description: o.message`Create a precompiled extension. Possible values: go, other` }),
  }),
  { brief: o.message`Create a new extension` },
);
