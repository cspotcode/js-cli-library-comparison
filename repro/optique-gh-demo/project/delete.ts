import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'delete',
  o.merge(outputParser, o.object({
    action: o.constant('delete'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
  })),
  { brief: o.message`Delete a project` },
);
