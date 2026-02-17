import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'create',
  o.merge(outputParser, o.object({
    action: o.constant('create'),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    title: o.option('--title', o.string(), { description: o.message`Title for the project` }),
  })),
  { brief: o.message`Create a project` },
);
