import * as o from '@optique/core';

export default o.command(
  'add',
  o.object({
    action: o.constant('add'),
    keyFile: o.optional(o.argument(o.string(), { description: o.message`SSH key file` })),
    title: o.option('-t', '--title', o.string(), {
      description: o.message`Title for the new key`,
    }),
    type: o.option('--type', o.string(), {
      description: o.message`Type of the ssh key: {authentication|signing} (default "authentication")`,
    }),
  }),
  { brief: o.message`Add an SSH key to your GitHub account` },
);
