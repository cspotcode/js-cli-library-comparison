import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    tag: o.optional(o.argument(o.string(), { description: o.message`Tag name` })),
    web: o.option('-w', '--web', { description: o.message`Open the release in the browser` }),
  })),
  { brief: o.message`View information about a release` },
);
