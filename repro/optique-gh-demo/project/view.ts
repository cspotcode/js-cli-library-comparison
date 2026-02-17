import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    web: o.option('-w', '--web', { description: o.message`Open a project in the browser` }),
  })),
  { brief: o.message`View a project` },
);
