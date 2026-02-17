import * as o from '@optique/core';
import delete_ from './delete.ts';
import get from './get.ts';
import list from './list.ts';
import set from './set.ts';

export default o.command(
  'variable',
  o.or(delete_, get, list, set),
  {
    brief: o.message`Manage GitHub Actions variables`,
    description: o.message`Variables can be set at the repository, environment or organization level for use in GitHub Actions or Dependabot.`,
  },
);
