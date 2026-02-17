import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'unlink',
  o.merge(outputParser, o.object({
    action: o.constant('unlink'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Unlink the project from a repository` }),
    team: o.option('--team', o.string(), { description: o.message`Unlink the project from a team` }),
  })),
  { brief: o.message`Unlink a project from a repository or a team` },
);
