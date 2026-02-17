import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'comment',
  o.object({
    action: o.constant('comment'),
    issue: o.argument(o.string(), { description: o.message`Issue number or URL` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`The comment body text` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from standard input)` }),
    createIfNone: o.option('--create-if-none', { description: o.message`Create a new comment if no comments are found. Can be used only with --edit-last` }),
    deleteLast: o.option('--delete-last', { description: o.message`Delete the last comment of the current user` }),
    editLast: o.option('--edit-last', { description: o.message`Edit the last comment of the current user` }),
    editor: o.option('-e', '--editor', { description: o.message`Skip prompts and open the text editor to write the body in` }),
    web: o.option('-w', '--web', { description: o.message`Open the web browser to write the comment` }),
    yes: o.option('--yes', { description: o.message`Skip the delete confirmation prompt when --delete-last is provided` }),
    repo: repoFlag,
  }),
  { brief: o.message`Add a comment to an issue` },
);
