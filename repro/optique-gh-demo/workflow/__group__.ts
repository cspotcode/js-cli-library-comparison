import * as o from '@optique/core';
import disable from './disable.ts';
import enable from './enable.ts';
import list from './list.ts';
import run from './run.ts';
import view from './view.ts';

export default o.command(
  'workflow',
  o.or(disable, enable, list, run, view),
  {
    brief: o.message`View details about GitHub Actions workflows`,
    description: o.message`List, view, and run workflows in GitHub Actions.`,
  },
);
