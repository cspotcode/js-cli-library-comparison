import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'ready',
  o.object({
    action: o.constant('ready'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    undo: o.option('--undo', { description: o.message`Convert a pull request to "draft"` }),
    repo: repoFlag,
  }),
  { brief: o.message`Mark a pull request as ready for review` },
);
