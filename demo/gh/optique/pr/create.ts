import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    assignee: o.multiple(o.option('-a', '--assignee', o.string(), { description: o.message`Assign people by login. Use "@me" to self-assign.` })),
    base: o.option('-B', '--base', o.string(), { description: o.message`The branch into which you want your code merged` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`Body for the pull request` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    draft: o.option('-d', '--draft', { description: o.message`Mark pull request as a draft` }),
    fill: o.option('--fill', { description: o.message`Do not prompt for title/body and just use commit info` }),
    fillFirst: o.option('--fill-first', { description: o.message`Do not prompt for title/body and just use first commit info` }),
    fillVerbose: o.option('--fill-verbose', { description: o.message`Do not prompt for title and just use commit info, leave body empty` }),
    head: o.option('-H', '--head', o.string(), { description: o.message`The branch that contains commits for your pull request (default [current branch])` }),
    label: o.multiple(o.option('-l', '--label', o.string(), { description: o.message`Add labels by name` })),
    maintainerCanModify: o.option('--maintainer-can-modify', { description: o.message`Allow maintainers to modify this pull request` }),
    milestone: o.option('-m', '--milestone', o.string(), { description: o.message`Add the pull request to a milestone by name` }),
    noMaintainerEdit: o.option('--no-maintainer-edit', { description: o.message`Disable maintainer's ability to modify pull request` }),
    project: o.multiple(o.option('-p', '--project', o.string(), { description: o.message`Add the pull request to projects by name` })),
    recover: o.option('--recover', o.string(), { description: o.message`Recover input from a failed run of create` }),
    reviewer: o.multiple(o.option('-r', '--reviewer', o.string(), { description: o.message`Request reviews from people or teams by their handle` })),
    title: o.option('-t', '--title', o.string(), { description: o.message`Title for the pull request` }),
    template: o.option('-T', '--template', o.string(), { description: o.message`Template file to use as starting body text` }),
    web: o.option('-w', '--web', { description: o.message`Open the web browser to create a pull request` }),
    repo: repoFlag,
  }),
  { brief: o.message`Create a pull request` },
);
