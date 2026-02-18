import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'view',
  o.merge(outputParser, o.object({
    action: o.constant('view'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    comments: o.option('-c', '--comments', { description: o.message`View pull request comments` }),
    web: o.option('-w', '--web', { description: o.message`Open a pull request in the browser` }),
    repo: repoFlag,
  })),
  { brief: o.message`View a pull request` },
);
