import * as o from '@optique/core';
import add from './add.ts';
import delete_ from './delete.ts';
import list from './list.ts';

export default o.command(
  'ssh-key',
  o.or(add, delete_, list),
  {
    brief: o.message`Manage SSH keys`,
    description: o.message`Manage SSH keys registered with your GitHub account.`,
  },
);
