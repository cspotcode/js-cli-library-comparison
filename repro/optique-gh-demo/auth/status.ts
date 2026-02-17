import * as o from '@optique/core';

export default o.command(
  'status',
  o.object({
    action: o.constant('status'),
    active: o.option('-a', '--active', {
      description: o.message`Display the active account only`,
    }),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`Check only a specific hostname's auth status`,
    }),
    jq: o.option('--jq', o.string(), {
      description: o.message`Filter JSON output using a jq expression`,
    }),
    json: o.option('--json', o.string(), {
      description: o.message`Output JSON with the specified fields`,
    }),
    showToken: o.option('-t', '--show-token', {
      description: o.message`Display the auth token`,
    }),
    template: o.option('--template', o.string(), {
      description: o.message`Format JSON output using a Go template; see "gh help formatting"`,
    }),
  }),
  {
    brief: o.message`Display active account and authentication state on each known GitHub host`,
    description: o.message`Display active account and authentication state on each known GitHub host.

For each host, the authentication state of each known account is tested and any issues are included in the output.`,
  },
);
