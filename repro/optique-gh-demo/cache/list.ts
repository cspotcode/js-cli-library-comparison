import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      key: o.option('-k', '--key', o.string(), {
        description: o.message`Filter by cache key prefix`,
      }),
      limit: o.option('-L', '--limit', o.string(), {
        description: o.message`Maximum number of caches to fetch (default 30)`,
      }),
      order: o.option('-O', '--order', o.string(), {
        description: o.message`Order of caches returned: {asc|desc} (default "desc")`,
      }),
      ref: o.option('-r', '--ref', o.string(), {
        description: o.message`Filter by ref, formatted as refs/heads/<branch name> or refs/pull/<number>/merge`,
      }),
      sort: o.option('-S', '--sort', o.string(), {
        description: o.message`Sort fetched caches: {created_at|last_accessed_at|size_in_bytes} (default "last_accessed_at")`,
      }),
      repo: repoFlag,
    }),
  ),
  {
    brief: o.message`List GitHub Actions caches`,
  },
);
