import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    secretName: o.argument(o.string(), { description: o.message`Secret name` }),
    env: o.option('-e', '--env', o.string(), { description: o.message`Delete a secret for an environment` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`Delete a secret for an organization` }),
    user: o.option('-u', '--user', { description: o.message`Delete a secret for your user` }),
    repo: repoFlag,
  }),
  { brief: o.message`Delete secrets` },
);
