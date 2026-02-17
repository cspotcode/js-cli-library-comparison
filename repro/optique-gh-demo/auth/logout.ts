import * as o from '@optique/core';

export default o.command(
  'logout',
  o.object({
    action: o.constant('logout'),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`The hostname of the GitHub instance to log out of`,
    }),
    user: o.option('-u', '--user', o.string(), {
      description: o.message`The account to log out of`,
    }),
  }),
  {
    brief: o.message`Log out of a GitHub account`,
    description: o.message`Remove authentication for a GitHub account.

This command removes the stored authentication configuration for an account. The authentication configuration is only removed locally.

This command does not revoke authentication tokens.`,
  },
);
