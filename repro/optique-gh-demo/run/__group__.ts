import * as o from '@optique/core';
import cancel from './cancel.ts';
import delete_ from './delete.ts';
import download from './download.ts';
import list from './list.ts';
import rerun from './rerun.ts';
import view from './view.ts';
import watch from './watch.ts';

export default o.command(
  'run',
  o.or(cancel, delete_, download, list, rerun, view, watch),
  {
    brief: o.message`View details about workflow runs`,
    description: o.message`List, view, and watch recent workflow runs from GitHub Actions.`,
  },
);
