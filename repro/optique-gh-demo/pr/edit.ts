import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    addAssignee: o.multiple(o.option('--add-assignee', o.string(), { description: o.message`Add assigned users by their login. Use "@me" to self-assign.` })),
    addLabel: o.multiple(o.option('--add-label', o.string(), { description: o.message`Add labels by name` })),
    addProject: o.multiple(o.option('--add-project', o.string(), { description: o.message`Add the pull request to projects by name` })),
    addReviewer: o.multiple(o.option('--add-reviewer', o.string(), { description: o.message`Add assigned reviewers by their login or team slug in the format org/team` })),
    base: o.option('-B', '--base', o.string(), { description: o.message`Change the base branch for this pull request` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`Set the new body` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    milestone: o.option('-m', '--milestone', o.string(), { description: o.message`Edit the milestone the pull request belongs to by name` }),
    removeAssignee: o.multiple(o.option('--remove-assignee', o.string(), { description: o.message`Remove assigned users by their login` })),
    removeLabel: o.multiple(o.option('--remove-label', o.string(), { description: o.message`Remove labels by name` })),
    removeMilestone: o.option('--remove-milestone', { description: o.message`Remove the milestone association from the pull request` }),
    removeProject: o.multiple(o.option('--remove-project', o.string(), { description: o.message`Remove the pull request from projects by title` })),
    removeReviewer: o.multiple(o.option('--remove-reviewer', o.string(), { description: o.message`Remove assigned reviewers by their login or team slug` })),
    title: o.option('-t', '--title', o.string(), { description: o.message`Set the new title` }),
    repo: repoFlag,
  }),
  { brief: o.message`Edit a pull request` },
);
