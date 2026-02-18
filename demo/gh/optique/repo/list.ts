import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(outputParser, o.object({
    action: o.constant('list'),
    owner: o.optional(o.argument(o.string(), { description: o.message`Owner username or org` })),
    archived: o.option('--archived', { description: o.message`Limit to archived repositories` }),
    fork: o.option('--fork', { description: o.message`Limit to forked repositories` }),
    language: o.option('-l', '--language', o.string(), { description: o.message`Filter by primary coding language` }),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of items to fetch (default 30)` }),
    noArchived: o.option('--no-archived', { description: o.message`Omit archived repositories` }),
    private: o.option('--private', { description: o.message`Limit to private repositories` }),
    public: o.option('--public', { description: o.message`Limit to public repositories` }),
    source: o.option('--source', { description: o.message`Limit to non-forked repositories` }),
    topic: o.multiple(o.option('--topic', o.string(), { description: o.message`Filter by topic` })),
    web: o.option('-w', '--web', { description: o.message`Open the browser to list the repositories` }),
  })),
  { brief: o.message`List repositories owned by user or organization` },
);
