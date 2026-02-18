import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      app: o.option('--app', o.string(), { description: o.message`Filter by GitHub App author` }),
      assignee: o.option('-a', '--assignee', o.string(), { description: o.message`Filter by assignee` }),
      author: o.option('-A', '--author', o.string(), { description: o.message`Filter by author` }),
      label: o.multiple(o.option('-l', '--label', o.string(), { description: o.message`Filter by label` })),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of issues to fetch (default 30)` }),
      mention: o.option('--mention', o.string(), { description: o.message`Filter by mention` }),
      milestone: o.option('-m', '--milestone', o.string(), { description: o.message`Filter by milestone number or title` }),
      search: o.option('-S', '--search', o.string(), { description: o.message`Search issues with query` }),
      state: o.option('-s', '--state', o.string(), { description: o.message`Filter by state: {open|closed|all} (default "open")` }),
      web: o.option('-w', '--web', { description: o.message`List issues in the web browser` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List issues in a repository` },
);
