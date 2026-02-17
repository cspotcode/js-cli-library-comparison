import * as o from '@optique/core';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    branch: o.option('-b', '--branch', o.string(), { description: o.message`Repository branch` }),
    defaultPermissions: o.option('--default-permissions', { description: o.message`Do not prompt to accept additional permissions requested by the codespace` }),
    devcontainerPath: o.option('--devcontainer-path', o.string(), { description: o.message`Path to the devcontainer.json file to use when creating codespace` }),
    displayName: o.option('-d', '--display-name', o.string(), { description: o.message`Display name for the codespace` }),
    idleTimeout: o.option('--idle-timeout', o.string(), { description: o.message`Allowed inactivity before codespace is stopped, e.g. "10m", "1h"` }),
    location: o.option('-l', '--location', o.string(), { description: o.message`Location: {EastUs|SouthEastAsia|WestEurope|WestUs2}` }),
    machine: o.option('-m', '--machine', o.string(), { description: o.message`Hardware specifications for the VM` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Repository name with owner: user/repo` }),
    retentionPeriod: o.option('--retention-period', o.string(), { description: o.message`Allowed time after shutting down before the codespace is automatically deleted, e.g. "1h", "72h"` }),
    status: o.option('-s', '--status', { description: o.message`Show status of post-create command and dotfiles` }),
  }),
  { brief: o.message`Create a codespace` },
);
