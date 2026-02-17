import * as o from '@optique/core';
import create from './create.ts';
import list from './list.ts';
import status from './status.ts';
import close from './close.ts';
import comment from './comment.ts';
import delete_ from './delete.ts';
import develop from './develop.ts';
import edit from './edit.ts';
import lock from './lock.ts';
import pin from './pin.ts';
import reopen from './reopen.ts';
import transfer from './transfer.ts';
import unlock from './unlock.ts';
import unpin from './unpin.ts';
import view from './view.ts';

export default o.command(
  'issue',
  o.or(
    o.group('GENERAL COMMANDS', o.or(create, list, status)),
    o.group('TARGETED COMMANDS', o.or(close, comment, delete_, develop, edit, lock, pin, reopen, transfer, unlock, unpin, view)),
  ),
  { brief: o.message`Manage issues`, description: o.message`Work with GitHub issues.` },
);
