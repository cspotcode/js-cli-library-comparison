import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'search',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('search'),
      query: o.optional(o.argument(o.string(), { description: o.message`Search query` })),
      license: o.multiple(o.option('--license', o.string(), { description: o.message`Filter based on license type` })),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of extensions to fetch (default 30)` }),
      order: o.option('--order', o.string(), { description: o.message`Order of repositories returned: {asc|desc} (default "desc")` }),
      owner: o.multiple(o.option('--owner', o.string(), { description: o.message`Filter on owner` })),
      sort: o.option('--sort', o.string(), { description: o.message`Sort fetched repositories: {forks|help-wanted-issues|stars|updated} (default "best-match")` }),
      web: o.option('-w', '--web', { description: o.message`Open the search query in the web browser` }),
    }),
  ),
  { brief: o.message`Search extensions to the GitHub CLI` },
);
