import * as o from '@optique/core';
import list from './list.ts';

export default o.command(
  'org',
  o.or(list),
  {
    brief: o.message`Manage organizations`,
    description: o.message`Work with GitHub organizations.`,
  },
);
