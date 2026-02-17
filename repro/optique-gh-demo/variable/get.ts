import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'get',
  o.merge(
    outputParser,
    o.object({
      action: o.constant('get'),
      variableName: o.argument(o.string(), { description: o.message`Variable name` }),
      env: o.option('-e', '--env', o.string(), { description: o.message`Get a variable for an environment` }),
      org: o.option('-o', '--org', o.string(), { description: o.message`Get a variable for an organization` }),
      repo: repoFlag,
    }),
  ),
  { brief: o.message`Get variables` },
);
