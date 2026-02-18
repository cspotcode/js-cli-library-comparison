import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'edit',
  o.merge(outputParser, o.object({
    action: o.constant('edit'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    description: o.option('--description', o.string(), { description: o.message`New description` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    readme: o.option('--readme', o.string(), { description: o.message`New readme` }),
    title: o.option('--title', o.string(), { description: o.message`New title` }),
  })),
  { brief: o.message`Edit a project` },
);
