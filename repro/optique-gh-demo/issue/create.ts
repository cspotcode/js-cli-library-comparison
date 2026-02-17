import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    assignee: o.multiple(o.option('-a', '--assignee', o.string(), { description: o.message`Assign people by their login. Use "@me" to self-assign.` })),
    body: o.option('-b', '--body', o.string(), { description: o.message`Supply a body. Will prompt for one otherwise.` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from standard input)` }),
    editor: o.option('-e', '--editor', { description: o.message`Skip prompts and open the text editor to write the title and body in` }),
    label: o.multiple(o.option('-l', '--label', o.string(), { description: o.message`Add labels by name` })),
    milestone: o.option('-m', '--milestone', o.string(), { description: o.message`Add the issue to a milestone by name` }),
    project: o.multiple(o.option('-p', '--project', o.string(), { description: o.message`Add the issue to projects by title` })),
    recover: o.option('--recover', o.string(), { description: o.message`Recover input from a failed run of create` }),
    template: o.option('-T', '--template', o.string(), { description: o.message`Template name to use as starting body text` }),
    title: o.option('-t', '--title', o.string(), { description: o.message`Supply a title. Will prompt for one otherwise.` }),
    web: o.option('-w', '--web', { description: o.message`Open the browser to create an issue` }),
    repo: repoFlag,
  }),
  {
    brief: o.message`Create a new issue`,
    description: o.message`Create an issue on GitHub.`,
  },
);
