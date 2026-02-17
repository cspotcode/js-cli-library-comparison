import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'item-delete',
  o.merge(outputParser, o.object({
    action: o.constant('item-delete'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    id: o.option('--id', o.string(), { description: o.message`ID of the item to delete` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
  })),
  { brief: o.message`Delete an item from a project` },
);
