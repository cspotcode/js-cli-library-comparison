import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'code',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('code'),
      query: o.argument(o.string(), { description: o.message`Search query` }),
      extension: o.option('--extension', o.string(), { description: o.message`Filter on file extension` }),
      filename: o.option('--filename', o.string(), { description: o.message`Filter on filename` }),
      language: o.option('--language', o.string(), { description: o.message`Filter results by language` }),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of code results to fetch (default 30)` }),
      match: o.multiple(o.option('--match', o.string(), { description: o.message`Restrict search to file contents or file path: {file|path}` })),
      owner: o.multiple(o.option('--owner', o.string(), { description: o.message`Filter on owner` })),
      repo: o.multiple(o.option('-R', '--repo', o.string(), { description: o.message`Filter on repository` })),
      size: o.option('--size', o.string(), { description: o.message`Filter on size range, in kilobytes` }),
      web: o.option('-w', '--web', { description: o.message`Open the search query in the web browser` }),
    }),
  ),
  { brief: o.message`Search within code` },
);
