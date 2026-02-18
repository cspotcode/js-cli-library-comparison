import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'view',
  o.object({
    action: o.constant('view'),
    workflow: o.optional(o.argument(o.string(), { description: o.message`Workflow ID, name, or filename` })),
    ref: o.option('-r', '--ref', o.string(), { description: o.message`The branch or tag name which contains the version of the workflow file you'd like to view` }),
    web: o.option('-w', '--web', { description: o.message`Open workflow in the browser` }),
    yaml: o.option('-y', '--yaml', { description: o.message`View the workflow yaml file` }),
    repo: repoFlag,
  }),
  { brief: o.message`View the summary of a workflow` },
);
