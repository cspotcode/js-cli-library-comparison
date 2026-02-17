import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'repos',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('repos'),
      query: o.optional(o.argument(o.string(), { description: o.message`Search query` })),
      archived: o.option('--archived', { description: o.message`Filter based on the repository archived state` }),
      created: o.option('--created', o.string(), { description: o.message`Filter based on created at date` }),
      followers: o.option('--followers', o.string(), { description: o.message`Filter based on number of followers` }),
      forks: o.option('--forks', o.string(), { description: o.message`Filter on number of forks` }),
      goodFirstIssues: o.option('--good-first-issues', o.string(), { description: o.message`Filter on number of issues with the 'good first issue' label` }),
      helpWantedIssues: o.option('--help-wanted-issues', o.string(), { description: o.message`Filter on number of issues with the 'help wanted' label` }),
      includeForks: o.option('--include-forks', o.string(), { description: o.message`Include forks in fetched repositories: {false|true|only}` }),
      language: o.option('--language', o.string(), { description: o.message`Filter based on the coding language` }),
      license: o.multiple(o.option('--license', o.string(), { description: o.message`Filter based on license type` })),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of repositories to fetch (default 30)` }),
      match: o.multiple(o.option('--match', o.string(), { description: o.message`Restrict search to specific field of repository: {name|description|readme}` })),
      order: o.option('--order', o.string(), { description: o.message`Order of repositories returned: {asc|desc} (default "desc")` }),
      owner: o.multiple(o.option('--owner', o.string(), { description: o.message`Filter on repository owner` })),
      size: o.option('--size', o.string(), { description: o.message`Filter on a size range, in kilobytes` }),
      sort: o.option('--sort', o.string(), { description: o.message`Sort fetched repositories: {forks|help-wanted-issues|stars|updated} (default "best-match")` }),
      stars: o.option('--stars', o.string(), { description: o.message`Filter on number of stars` }),
      topic: o.multiple(o.option('--topic', o.string(), { description: o.message`Filter on topic` })),
      updated: o.option('--updated', o.string(), { description: o.message`Filter on last updated at date` }),
      visibility: o.option('--visibility', o.string(), { description: o.message`Filter based on visibility: {public|private|internal}` }),
      web: o.option('-w', '--web', { description: o.message`Open the search query in the web browser` }),
    }),
  ),
  { brief: o.message`Search for repositories` },
);
