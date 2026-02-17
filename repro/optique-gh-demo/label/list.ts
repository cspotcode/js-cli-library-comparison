import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of labels to fetch (default 30)` }),
      order: o.option('--order', o.string(), { description: o.message`Order of labels returned: {asc|desc} (default "asc")` }),
      search: o.option('-S', '--search', o.string(), { description: o.message`Search label names and descriptions` }),
      sort: o.option('--sort', o.string(), { description: o.message`Sort fetched labels: {created|name} (default "created")` }),
      web: o.option('-w', '--web', { description: o.message`List labels in the web browser` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List labels in a repository` },
);
