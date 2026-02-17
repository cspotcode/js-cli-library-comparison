import * as o from '@optique/core';
import add from './add.ts';
import delete_ from './delete.ts';
import list from './list.ts';

export default o.command(
  'gpg-key',
  o.or(add, delete_, list),
  {
    brief: o.message`Manage GPG keys`,
    description: o.message`Manage GPG keys registered with your GitHub account.`,
  },
);
