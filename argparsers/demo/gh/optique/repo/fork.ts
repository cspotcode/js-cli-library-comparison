import * as o from '@optique/core';

export default o.command(
  'fork',
  o.object({
    action: o.constant('fork'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    clone: o.option('--clone', { description: o.message`Clone the fork` }),
    defaultBranchOnly: o.option('--default-branch-only', { description: o.message`Only include the default branch in the fork` }),
    forkName: o.option('--fork-name', o.string(), { description: o.message`Rename the forked repository` }),
    org: o.option('--org', o.string(), { description: o.message`Create the fork in an organization` }),
    remote: o.option('--remote', { description: o.message`Add a git remote for the fork` }),
    remoteName: o.option('--remote-name', o.string(), { description: o.message`Specify the name for the new remote (default "origin")` }),
  }),
  { brief: o.message`Create a fork of a repository` },
);
