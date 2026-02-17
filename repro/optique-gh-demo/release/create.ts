import * as o from '@optique/core';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    tag: o.optional(o.argument(o.string(), { description: o.message`Tag name` })),
    discussionCategory: o.option('--discussion-category', o.string(), { description: o.message`Start a discussion in the specified category when publishing a draft or non-draft release` }),
    draft: o.option('-d', '--draft', { description: o.message`Save the release as a draft instead of publishing it` }),
    generateNotes: o.option('--generate-notes', { description: o.message`Automatically generate title and notes for the release` }),
    latest: o.option('--latest', { description: o.message`Mark this release as "Latest" (default: automatic based on date and version)` }),
    noLatest: o.option('--no-latest', { description: o.message`Mark this release as not "Latest"` }),
    notes: o.option('-n', '--notes', o.string(), { description: o.message`Release notes` }),
    notesFile: o.option('-F', '--notes-file', o.string(), { description: o.message`Read release notes from file (use "-" to read from stdin)` }),
    notesFromTag: o.option('--notes-from-tag', { description: o.message`Automatically generate notes based on git tag description` }),
    notesStartTag: o.option('--notes-start-tag', o.string(), { description: o.message`Tag to use as the starting point for generating release notes` }),
    prerelease: o.option('-p', '--prerelease', { description: o.message`Mark the release as a prerelease` }),
    target: o.option('--target', o.string(), { description: o.message`Target branch or full commit SHA (default: main branch)` }),
    title: o.option('-t', '--title', o.string(), { description: o.message`Release title` }),
    verifyTag: o.option('--verify-tag', { description: o.message`Abort in case the git tag doesn't already exist in the remote repository` }),
  }),
  { brief: o.message`Create a new release` },
);
