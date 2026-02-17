import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'diff',
  o.object({
    action: o.constant('diff'),
    pr: o.optional(o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` })),
    color: o.option('--color', o.string(), { description: o.message`Use color in diff output: {always|never|auto}` }),
    nameOnly: o.option('--name-only', { description: o.message`Display only names of changed files` }),
    patch: o.option('-p', '--patch', { description: o.message`Display diff in patch format` }),
    web: o.option('-w', '--web', { description: o.message`Open the pull request diff in the browser` }),
    repo: repoFlag,
  }),
  { brief: o.message`View changes in a pull request` },
);
