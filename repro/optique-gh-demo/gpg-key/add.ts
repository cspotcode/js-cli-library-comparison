import * as o from '@optique/core';

export default o.command(
  'add',
  o.object({
    action: o.constant('add'),
    keyFile: o.optional(o.argument(o.string(), { description: o.message`GPG key file` })),
    title: o.option('-t', '--title', o.string(), {
      description: o.message`Title for the new key`,
    }),
  }),
  { brief: o.message`Add a GPG key to your GitHub account` },
);
