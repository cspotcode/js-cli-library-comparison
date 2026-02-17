import * as o from '@optique/core';

export default o.command(
  'setup-git',
  o.object({
    action: o.constant('setup-git'),
    force: o.option('-f', '--force', {
      description: o.message`Force setup even if the host is not known. Must be used in conjunction with --hostname`,
    }),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`The hostname to configure git for`,
    }),
  }),
  {
    brief: o.message`Setup git with GitHub CLI`,
    description: o.message`This command configures git to use GitHub CLI as a credential helper.

By default, GitHub CLI will be set as the credential helper for all authenticated hosts.`,
  },
);
