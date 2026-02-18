import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    keyId: o.argument(o.string(), { description: o.message`Key ID` }),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Delete a GPG key from your GitHub account` },
);
