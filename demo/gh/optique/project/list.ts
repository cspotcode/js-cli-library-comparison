import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(outputParser, o.object({
    action: o.constant('list'),
    closed: o.option('--closed', { description: o.message`Include closed projects` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of items to fetch (default 30)` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    web: o.option('-w', '--web', { description: o.message`Open projects list in the browser` }),
  })),
  { brief: o.message`List the projects for an owner` },
);
