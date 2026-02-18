import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'clone',
  o.object({
    action: o.constant('clone'),
    sourceRepo: o.argument(o.string(), { description: o.message`Source repository (OWNER/REPO)` }),
    force: o.option('-f', '--force', { description: o.message`Overwrite labels in the destination repository` }),
    repo: repoFlag,
  }),
  {
    brief: o.message`Clones labels from one repository to another`,
    description: o.message`Clones labels from a source repository to a destination repository on GitHub. By default, the destination repository is the current repository.`,
  },
);
