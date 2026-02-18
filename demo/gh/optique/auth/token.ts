import * as o from '@optique/core';

export default o.command(
  'token',
  o.object({
    action: o.constant('token'),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`The hostname of the GitHub instance authenticated with`,
    }),
    user: o.option('-u', '--user', o.string(), {
      description: o.message`The account to output the token for`,
    }),
  }),
  {
    brief: o.message`Print the authentication token gh uses for a hostname and account`,
    description: o.message`This command outputs the authentication token for an account on a given GitHub host.

Without the --hostname flag, the default host is chosen. Without the --user flag, the active account for the host is chosen.`,
  },
);
