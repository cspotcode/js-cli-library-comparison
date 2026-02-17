import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'run',
  o.object({
    action: o.constant('run'),
    workflow: o.optional(o.argument(o.string(), { description: o.message`Workflow ID or name` })),
    field: o.multiple(o.option('-F', '--field', o.string(), { description: o.message`Add a string parameter in key=value format, respecting @ syntax` })),
    json: o.option('--json', { description: o.message`Read workflow inputs as JSON via STDIN` }),
    rawField: o.multiple(o.option('-f', '--raw-field', o.string(), { description: o.message`Add a string parameter in key=value format` })),
    ref: o.option('-r', '--ref', o.string(), { description: o.message`Branch or tag name which contains the version of the workflow file you'd like to run` }),
    repo: repoFlag,
  }),
  {
    brief: o.message`Run a workflow by creating a workflow_dispatch event`,
    description: o.message`Create a workflow_dispatch event for a given workflow.

This command will trigger GitHub Actions to run a given workflow file. The given workflow file must support an on.workflow_dispatch trigger in order to be run in this way.`,
  },
);
