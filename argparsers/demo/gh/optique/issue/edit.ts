import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    issues: o.argument(o.string(), { description: o.message`Issue number(s) or URL(s)` }),
    addAssignee: o.multiple(o.option('--add-assignee', o.string(), { description: o.message`Add assigned users by their login. Use "@me" to assign yourself.` })),
    addLabel: o.multiple(o.option('--add-label', o.string(), { description: o.message`Add labels by name` })),
    addProject: o.multiple(o.option('--add-project', o.string(), { description: o.message`Add the issue to projects by title` })),
    body: o.option('-b', '--body', o.string(), { description: o.message`Set the new body.` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from standard input)` }),
    milestone: o.option('-m', '--milestone', o.string(), { description: o.message`Edit the milestone the issue belongs to by name` }),
    removeAssignee: o.multiple(o.option('--remove-assignee', o.string(), { description: o.message`Remove assigned users by their login.` })),
    removeLabel: o.multiple(o.option('--remove-label', o.string(), { description: o.message`Remove labels by name` })),
    removeMilestone: o.option('--remove-milestone', { description: o.message`Remove the milestone association from the issue` }),
    removeProject: o.multiple(o.option('--remove-project', o.string(), { description: o.message`Remove the issue from projects by title` })),
    title: o.option('-t', '--title', o.string(), { description: o.message`Set the new title.` }),
    repo: repoFlag,
  }),
  { brief: o.message`Edit issues` },
);
