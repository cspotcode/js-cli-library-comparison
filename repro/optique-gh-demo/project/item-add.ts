import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'item-add',
  o.merge(outputParser, o.object({
    action: o.constant('item-add'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    url: o.option('--url', o.string(), { description: o.message`URL of the issue or pull request to add to the project` }),
  })),
  { brief: o.message`Add a pull request or an issue to a project` },
);
