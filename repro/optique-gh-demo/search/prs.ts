import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'prs',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('prs'),
      query: o.optional(o.argument(o.string(), { description: o.message`Search query` })),
      app: o.option('--app', o.string(), { description: o.message`Filter by GitHub App author` }),
      archived: o.option('--archived', { description: o.message`Restrict search to archived repositories` }),
      assignee: o.option('-a', '--assignee', o.string(), { description: o.message`Filter by assignee` }),
      author: o.option('-A', '--author', o.string(), { description: o.message`Filter by author` }),
      baseBranch: o.option('--base', o.string(), { description: o.message`Filter on base branch name` }),
      checks: o.option('--checks', o.string(), { description: o.message`Filter based on status of the checks: {passing|failing|pending}` }),
      closed: o.option('--closed', o.string(), { description: o.message`Filter on closed at date` }),
      created: o.option('--created', o.string(), { description: o.message`Filter based on created at date` }),
      draft: o.option('--draft', { description: o.message`Filter based on draft state` }),
      headBranch: o.option('--head', o.string(), { description: o.message`Filter on head branch name` }),
      label: o.multiple(o.option('-l', '--label', o.string(), { description: o.message`Filter on label` })),
      language: o.option('--language', o.string(), { description: o.message`Filter based on the coding language` }),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of results to fetch (default 30)` }),
      locked: o.option('--locked', { description: o.message`Filter on locked conversation status` }),
      match: o.multiple(o.option('--match', o.string(), { description: o.message`Restrict search to specific field of pull request: {title|body|comments}` })),
      merged: o.option('--merged', o.string(), { description: o.message`Filter on merged at date` }),
      milestone: o.option('--milestone', o.string(), { description: o.message`Filter by milestone title` }),
      order: o.option('--order', o.string(), { description: o.message`Order of pull requests returned: {asc|desc} (default "desc")` }),
      owner: o.multiple(o.option('--owner', o.string(), { description: o.message`Filter on repository owner` })),
      repo: o.multiple(o.option('-R', '--repo', o.string(), { description: o.message`Filter on repository` })),
      sort: o.option('--sort', o.string(), { description: o.message`Sort fetched pull requests: {comments|created|interactions|reactions|updated} (default "best-match")` }),
      state: o.option('--state', o.string(), { description: o.message`Filter based on state: {open|closed|merged}` }),
      updated: o.option('--updated', o.string(), { description: o.message`Filter on last updated at date` }),
      visibility: o.option('--visibility', o.string(), { description: o.message`Filter based on repository visibility: {public|private|internal}` }),
      web: o.option('-w', '--web', { description: o.message`Open the search query in the web browser` }),
    }),
  ),
  { brief: o.message`Search for pull requests` },
);
