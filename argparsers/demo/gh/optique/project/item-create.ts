import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'item-create',
  o.merge(outputParser, o.object({
    action: o.constant('item-create'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    body: o.option('--body', o.string(), { description: o.message`Body for the draft issue` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    title: o.option('--title', o.string(), { description: o.message`Title for the draft issue` }),
  })),
  { brief: o.message`Create a draft issue item in a project` },
);
