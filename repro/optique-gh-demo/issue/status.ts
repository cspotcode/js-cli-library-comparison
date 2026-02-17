import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'status',
  o.merge(outputParser, o.object({ action: o.constant('status'), repo: repoFlag })),
  { brief: o.message`Show status of relevant issues` },
);
