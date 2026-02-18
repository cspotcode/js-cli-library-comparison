import * as o from '@optique/core';

export default o.command(
  'list',
  o.object({
    action: o.constant('list'),
  }),
  {
    brief: o.message`List your aliases`,
    description: o.message`This command prints out all of the aliases gh is configured to use.`,
  },
);
