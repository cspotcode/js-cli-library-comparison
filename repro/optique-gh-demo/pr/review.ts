import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'review',
  o.object({
    action: o.constant('review'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    approve: o.option('-a', '--approve', { description: o.message`Approve pull request` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`Specify the body of a review` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    comment: o.option('-c', '--comment', { description: o.message`Comment on a pull request` }),
    editor: o.option('-e', '--editor', { description: o.message`Skip prompts and open the text editor to write the body in` }),
    requestChanges: o.option('-r', '--request-changes', { description: o.message`Request changes on a pull request` }),
    repo: repoFlag,
  }),
  { brief: o.message`Add a review to a pull request` },
);
