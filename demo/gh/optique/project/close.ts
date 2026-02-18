import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'close',
  o.merge(outputParser, o.object({
    action: o.constant('close'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    undo: o.option('--undo', { description: o.message`Reopen a closed project` }),
  })),
  { brief: o.message`Close a project` },
);
