import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    variableName: o.argument(o.string(), { description: o.message`Variable name` }),
    env: o.option('-e', '--env', o.string(), { description: o.message`Delete a variable for an environment` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`Delete a variable for an organization` }),
    repo: repoFlag,
  }),
  { brief: o.message`Delete variables` },
);
