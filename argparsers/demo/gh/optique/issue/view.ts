import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    comments: o.option('-c', '--comments', { description: o.message`View issue comments` }),
    web: o.option('-w', '--web', { description: o.message`Open an issue in the browser` }),
    repo: repoFlag,
  })),
  { brief: o.message`View an issue` },
);
