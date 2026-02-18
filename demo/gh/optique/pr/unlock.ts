import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'unlock',
  o.object({
    action: o.constant('unlock'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    repo: repoFlag,
  }),
  { brief: o.message`Unlock pull request conversation` },
);
