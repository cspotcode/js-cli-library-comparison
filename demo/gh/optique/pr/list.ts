import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(outputParser, o.object({
    action: o.constant('list'),
    assignee: o.option('-a', '--assignee', o.string(), { description: o.message`Filter by assignee` }),
    author: o.option('-A', '--author', o.string(), { description: o.message`Filter by author` }),
    base: o.option('-B', '--base', o.string(), { description: o.message`Filter by base branch` }),
    draft: o.option('--draft', { description: o.message`Filter by draft state` }),
    head: o.option('-H', '--head', o.string(), { description: o.message`Filter by head branch` }),
    label: o.multiple(o.option('-l', '--label', o.string(), { description: o.message`Filter by label` })),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of items to fetch (default 30)` }),
    state: o.option('-s', '--state', o.string(), { description: o.message`Filter by state: {open|closed|merged|all}` }),
    web: o.option('-w', '--web', { description: o.message`List pull requests in the web browser` }),
    repo: repoFlag,
  })),
  { brief: o.message`List pull requests in a repository` },
);
