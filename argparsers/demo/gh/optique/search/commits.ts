import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'commits',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('commits'),
      query: o.argument(o.string(), { description: o.message`Search query` }),
      author: o.option('--author', o.string(), { description: o.message`Filter by author` }),
      authorDate: o.option('--author-date', o.string(), { description: o.message`Filter based on authored date` }),
      authorEmail: o.option('--author-email', o.string(), { description: o.message`Filter on author email` }),
      authorName: o.option('--author-name', o.string(), { description: o.message`Filter on author name` }),
      committer: o.option('--committer', o.string(), { description: o.message`Filter by committer` }),
      committerDate: o.option('--committer-date', o.string(), { description: o.message`Filter based on committed date` }),
      committerEmail: o.option('--committer-email', o.string(), { description: o.message`Filter on committer email` }),
      committerName: o.option('--committer-name', o.string(), { description: o.message`Filter on committer name` }),
      hash: o.option('--hash', o.string(), { description: o.message`Filter by commit hash` }),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of commits to fetch (default 30)` }),
      merge: o.option('--merge', { description: o.message`Filter on merge commits` }),
      order: o.option('--order', o.string(), { description: o.message`Order of commits returned: {asc|desc} (default "desc")` }),
      owner: o.multiple(o.option('--owner', o.string(), { description: o.message`Filter on repository owner` })),
      parent: o.option('--parent', o.string(), { description: o.message`Filter by parent hash` }),
      repo: o.multiple(o.option('-R', '--repo', o.string(), { description: o.message`Filter on repository` })),
      sort: o.option('--sort', o.string(), { description: o.message`Sort fetched commits: {author-date|committer-date} (default "best-match")` }),
      web: o.option('-w', '--web', { description: o.message`Open the search query in the web browser` }),
    }),
  ),
  { brief: o.message`Search for commits` },
);
