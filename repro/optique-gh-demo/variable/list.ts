import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('list'),
      env: o.option('-e', '--env', o.string(), { description: o.message`List variables for an environment` }),
      org: o.option('-o', '--org', o.string(), { description: o.message`List variables for an organization` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`List variables` },
);
