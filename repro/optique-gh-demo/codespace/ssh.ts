import * as o from '@optique/core';

export default o.command(
  'ssh',
  o.object({
    action: o.constant('ssh'),
    codespace: o.option('-c', '--codespace', o.string(), { description: o.message`Name of the codespace` }),
    debug: o.option('-d', '--debug', { description: o.message`Log debug data to a file` }),
    debugFile: o.option('--debug-file', o.string(), { description: o.message`Path of the file to log to` }),
    profile: o.option('--profile', o.string(), { description: o.message`Name of the SSH profile to use` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Filter codespace selection by repository name (user/repo)` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
    serverPort: o.option('--server-port', o.string(), { description: o.message`SSH server port number (0 => pick unused)` }),
  }),
  { brief: o.message`SSH into a codespace` },
);
