import * as o from '@optique/core';

export default o.command(
  'switch',
  o.object({
    action: o.constant('switch'),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`The hostname of the GitHub instance to switch account for`,
    }),
    user: o.option('-u', '--user', o.string(), {
      description: o.message`The account to switch to`,
    }),
  }),
  {
    brief: o.message`Switch active GitHub account`,
    description: o.message`Switch the active account for a GitHub host.

This command changes the authentication configuration that will be used when running commands targeting the specified GitHub host.`,
  },
);
