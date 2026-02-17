import * as o from '@optique/core';
import create from './create.ts';
import list from './list.ts';
import archive from './archive.ts';
import clone from './clone.ts';
import delete_ from './delete.ts';
import edit from './edit.ts';
import fork from './fork.ts';
import rename from './rename.ts';
import setDefault from './set-default.ts';
import sync from './sync.ts';
import unarchive from './unarchive.ts';
import view from './view.ts';

export default o.command(
  'repo',
  o.or(
    o.group('GENERAL COMMANDS', o.or(create, list)),
    o.group('TARGETED COMMANDS', o.or(archive, clone, delete_, edit, fork, rename, setDefault, sync, unarchive, view)),
  ),
  { brief: o.message`Manage repositories`, description: o.message`Work with GitHub repositories.` },
);
