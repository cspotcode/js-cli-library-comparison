import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'field-list',
  o.merge(outputParser, o.object({
    action: o.constant('field-list'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of items to fetch (default 30)` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
  })),
  { brief: o.message`List the fields in a project` },
);
