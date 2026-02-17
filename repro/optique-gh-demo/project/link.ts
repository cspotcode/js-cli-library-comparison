import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'link',
  o.merge(outputParser, o.object({
    action: o.constant('link'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Link the project to a repository` }),
    team: o.option('--team', o.string(), { description: o.message`Link the project to a team` }),
  })),
  { brief: o.message`Link a project to a repository or a team` },
);
