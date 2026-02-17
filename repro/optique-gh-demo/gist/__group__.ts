import * as o from '@optique/core';
import clone from './clone.ts';
import create from './create.ts';
import delete_ from './delete.ts';
import edit from './edit.ts';
import list from './list.ts';
import rename from './rename.ts';
import view from './view.ts';

export default o.command(
  'gist',
  o.or(clone, create, delete_, edit, list, rename, view),
  {
    brief: o.message`Manage gists`,
    description: o.message`Work with GitHub gists.`,
  },
);
