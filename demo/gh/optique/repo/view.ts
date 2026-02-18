import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    branch: o.option('-b', '--branch', o.string(), { description: o.message`View a specific branch of the repository` }),
    web: o.option('-w', '--web', { description: o.message`Open a repository in the browser` }),
  })),
  { brief: o.message`View a repository` },
);
