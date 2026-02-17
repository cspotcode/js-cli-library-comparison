import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'comment',
  o.object({
    action: o.constant('comment'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`The comment body text` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    createIfNone: o.option('--create-if-none', { description: o.message`Create a new comment if no comments match the criteria` }),
    editLast: o.option('--edit-last', { description: o.message`Edit the last comment of the same author` }),
    editor: o.option('--editor', { description: o.message`Skip prompts and open the text editor to write the body in` }),
    repo: repoFlag,
  }),
  { brief: o.message`Add a comment to a pull request` },
);
