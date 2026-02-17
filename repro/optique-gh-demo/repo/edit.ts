import * as o from '@optique/core';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    addTopic: o.multiple(o.option('--add-topic', o.string(), { description: o.message`Add repository topic` })),
    allowForking: o.option('--allow-forking', { description: o.message`Allow forking of an organization repository` }),
    allowUpdateBranch: o.option('--allow-update-branch', { description: o.message`Allow a pull request head branch that is behind its base branch to be updated` }),
    description: o.option('-d', '--description', o.string(), { description: o.message`Description of the repository` }),
    enableAutoMerge: o.option('--enable-auto-merge', { description: o.message`Enable auto-merge functionality` }),
    enableDiscussions: o.option('--enable-discussions', { description: o.message`Enable discussions in the repository` }),
    enableIssues: o.option('--enable-issues', { description: o.message`Enable issues in the repository` }),
    enableMergeCommit: o.option('--enable-merge-commit', { description: o.message`Enable merging pull requests via merge commit` }),
    enableProjects: o.option('--enable-projects', { description: o.message`Enable projects in the repository` }),
    enableRebaseMerge: o.option('--enable-rebase-merge', { description: o.message`Enable merging pull requests via rebase` }),
    enableSquashMerge: o.option('--enable-squash-merge', { description: o.message`Enable merging pull requests via squashed commit` }),
    enableWiki: o.option('--enable-wiki', { description: o.message`Enable wiki in the repository` }),
    homepage: o.option('-h', '--homepage', o.string(), { description: o.message`Repository home page URL` }),
    removeTopic: o.multiple(o.option('--remove-topic', o.string(), { description: o.message`Remove repository topic` })),
    template: o.option('--template', { description: o.message`Make the repository available as a template repository` }),
    visibility: o.option('--visibility', o.string(), { description: o.message`Change the visibility of the repository to {public|private|internal}` }),
  }),
  { brief: o.message`Edit repository settings` },
);
