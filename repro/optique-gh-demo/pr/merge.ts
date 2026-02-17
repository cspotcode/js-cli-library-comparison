import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'merge',
  o.object({
    action: o.constant('merge'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    admin: o.option('--admin', { description: o.message`Use administrator privileges to merge a pull request that does not meet requirements` }),
    auto: o.option('--auto', { description: o.message`Automatically merge only after necessary requirements are met` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`Body text for the merge commit` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    deleteBranch: o.option('-d', '--delete-branch', { description: o.message`Delete the local and remote branch after merge` }),
    disableAuto: o.option('--disable-auto', { description: o.message`Disable auto-merge for this pull request` }),
    editor: o.option('-e', '--editor', { description: o.message`Skip prompts and open the text editor to write the body in` }),
    merge: o.option('-m', '--merge', { description: o.message`Merge the commits with the base branch` }),
    rebase: o.option('-r', '--rebase', { description: o.message`Rebase the commits onto the base branch` }),
    squash: o.option('-s', '--squash', { description: o.message`Squash the commits into one commit and merge it into the base branch` }),
    subject: o.option('-t', '--subject', o.string(), { description: o.message`Subject text for the merge commit` }),
    repo: repoFlag,
  }),
  { brief: o.message`Merge a pull request` },
);
