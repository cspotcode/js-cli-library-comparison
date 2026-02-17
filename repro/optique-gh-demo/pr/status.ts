import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'status',
  o.merge(outputParser, o.object({
    action: o.constant('status'),
    conflictStatus: o.option('--conflict-status', { description: o.message`Display the merge conflict status of each pull request` }),
    repo: repoFlag,
  })),
  { brief: o.message`Show status of relevant pull requests` },
);
