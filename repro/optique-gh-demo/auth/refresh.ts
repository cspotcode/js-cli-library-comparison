import * as o from '@optique/core';

export default o.command(
  'refresh',
  o.object({
    action: o.constant('refresh'),
    clipboard: o.option('-c', '--clipboard', {
      description: o.message`Copy one-time OAuth device code to clipboard`,
    }),
    hostname: o.option('-h', '--hostname', o.string(), {
      description: o.message`The GitHub host to use for authentication`,
    }),
    insecureStorage: o.option('--insecure-storage', {
      description: o.message`Save authentication credentials in plain text instead of credential store`,
    }),
    removeScopes: o.multiple(o.option('-r', '--remove-scopes', o.string(), {
      description: o.message`Authentication scopes to remove from gh`,
    })),
    resetScopes: o.option('--reset-scopes', {
      description: o.message`Reset authentication scopes to the default minimum set of scopes`,
    }),
    scopes: o.multiple(o.option('-s', '--scopes', o.string(), {
      description: o.message`Additional authentication scopes for gh to have`,
    })),
  }),
  {
    brief: o.message`Refresh stored authentication credentials`,
    description: o.message`Expand or fix the permission scopes for stored credentials for active account.

The --scopes flag accepts a comma separated list of scopes you want your gh credentials to have. If no scopes are provided, the command maintains previously added scopes.`,
  },
);
