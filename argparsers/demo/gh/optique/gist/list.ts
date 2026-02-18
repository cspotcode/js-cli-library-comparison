import * as o from '@optique/core';

export default o.command(
  'list',
  o.object({
    action: o.constant('list'),
    filter: o.option('--filter', o.string(), {
      description: o.message`Filter gists using a regular expression`,
    }),
    includeContent: o.option('--include-content', {
      description: o.message`Include gists' file content when filtering`,
    }),
    limit: o.option('-L', '--limit', o.string(), {
      description: o.message`Maximum number of gists to fetch (default 10)`,
    }),
    public_: o.option('--public', {
      description: o.message`Show only public gists`,
    }),
    secret: o.option('--secret', {
      description: o.message`Show only secret gists`,
    }),
  }),
  {
    brief: o.message`List your gists`,
  },
);
