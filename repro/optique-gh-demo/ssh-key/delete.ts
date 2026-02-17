import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    id: o.argument(o.string(), { description: o.message`SSH key ID` }),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Delete an SSH key from your GitHub account` },
);
