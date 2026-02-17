import * as o from '@optique/core';
import delete_ from './delete.ts';
import import_ from './import.ts';
import list from './list.ts';
import set from './set.ts';

export default o.command(
  'alias',
  o.or(delete_, import_, list, set),
  {
    brief: o.message`Create command shortcuts`,
    description: o.message`Aliases can be used to make shortcuts for gh commands or to compose multiple commands.`,
  },
);
