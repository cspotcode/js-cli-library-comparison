import * as o from '@optique/core';
import create from './create.ts';
import list from './list.ts';
import status from './status.ts';
import checkout from './checkout.ts';
import checks from './checks.ts';
import close from './close.ts';
import comment from './comment.ts';
import diff from './diff.ts';
import edit from './edit.ts';
import lock from './lock.ts';
import merge from './merge.ts';
import ready from './ready.ts';
import reopen from './reopen.ts';
import revert from './revert.ts';
import review from './review.ts';
import unlock from './unlock.ts';
import updateBranch from './update-branch.ts';
import view from './view.ts';

export default o.command(
  'pr',
  o.or(
    o.group('GENERAL COMMANDS', o.or(create, list, status)),
    o.group('TARGETED COMMANDS', o.or(checkout, checks, close, comment, diff, edit, lock, merge, ready, reopen, revert, review, unlock, updateBranch, view)),
  ),
  { brief: o.message`Manage pull requests` },
);
