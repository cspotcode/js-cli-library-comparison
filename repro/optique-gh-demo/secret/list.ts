import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      env: o.option('-e', '--env', o.string(), { description: o.message`List secrets for an environment` }),
      org: o.option('-o', '--org', o.string(), { description: o.message`List secrets for an organization` }),
      user: o.option('-u', '--user', { description: o.message`List a secret for your user` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List secrets` },
);
