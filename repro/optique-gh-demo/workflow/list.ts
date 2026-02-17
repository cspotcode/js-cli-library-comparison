import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      all: o.option('-a', '--all', { description: o.message`Include disabled workflows` }),
      limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of workflows to fetch (default 50)` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List workflows` },
);
