import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'check',
  o.object({
    action: o.constant('check'),
    branch: o.optional(o.argument(o.string(), { description: o.message`Branch name to check rules for` })),
    default: o.option('--default', { description: o.message`Check rules on default branch` }),
    web: o.option('-w', '--web', { description: o.message`Open the branch rules page in a web browser` }),
    repo: repoFlag,
  }),
  {
    brief: o.message`View rules that would apply to a given branch`,
    description: o.message`View information about GitHub rules that apply to a given branch.

The provided branch name does not need to exist; rules will be displayed that would apply to a branch with that name.`,
  },
);
