import * as o from '@optique/core';
import clone from './clone.ts';
import create from './create.ts';
import delete_ from './delete.ts';
import edit from './edit.ts';
import list from './list.ts';

export default o.command(
  'label',
  o.or(clone, create, delete_, edit, list),
  {
    brief: o.message`Manage labels`,
    description: o.message`Work with GitHub labels.`,
  },
);
