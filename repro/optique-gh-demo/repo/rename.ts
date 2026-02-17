import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'rename',
  o.object({
    action: o.constant('rename'),
    newName: o.optional(o.argument(o.string(), { description: o.message`New name for the repository` })),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
    repo: repoFlag,
  }),
  { brief: o.message`Rename a repository` },
);
