import * as o from '@optique/core';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    tag: o.argument(o.string(), { description: o.message`Tag name` }),
    discussionCategory: o.option('--discussion-category', o.string(), { description: o.message`Start a discussion in the specified category when publishing a non-draft release` }),
    draft: o.option('-d', '--draft', { description: o.message`Save the release as a draft instead of publishing it` }),
    latest: o.option('--latest', { description: o.message`Explicitly mark the release as "Latest"` }),
    notes: o.option('-n', '--notes', o.string(), { description: o.message`Release notes` }),
    notesFile: o.option('-F', '--notes-file', o.string(), { description: o.message`Read release notes from file (use "-" to read from stdin)` }),
    notesStartTag: o.option('--notes-start-tag', o.string(), { description: o.message`Tag to use as the starting point for generating release notes` }),
    prerelease: o.option('-p', '--prerelease', { description: o.message`Mark the release as a prerelease` }),
    tagName: o.option('--tag', o.string(), { description: o.message`The name of the tag` }),
    target: o.option('--target', o.string(), { description: o.message`Target branch or full commit SHA` }),
    title: o.option('-t', '--title', o.string(), { description: o.message`Release title` }),
    verifyTag: o.option('--verify-tag', { description: o.message`Abort in case the git tag doesn't already exist in the remote repository` }),
  }),
  { brief: o.message`Edit a release` },
);
