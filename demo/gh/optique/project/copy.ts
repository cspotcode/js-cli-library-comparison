import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'copy',
  o.merge(outputParser, o.object({
    action: o.constant('copy'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    drafts: o.option('--drafts', { description: o.message`Copy draft issues to the new project` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    targetOwner: o.option('--target-owner', o.string(), { description: o.message`Login of the owner (user or org) to copy the project to` }),
    title: o.option('--title', o.string(), { description: o.message`Title for the new project` }),
  })),
  { brief: o.message`Copy a project` },
);
