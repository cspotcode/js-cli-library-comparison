import * as o from '@optique/core';
import delete_ from './delete.ts';
import list from './list.ts';

export default o.command(
  'cache',
  o.or(delete_, list),
  {
    brief: o.message`Manage GitHub Actions caches`,
    description: o.message`Work with GitHub Actions caches.`,
  },
);
