import * as o from '@optique/core';

export default o.command(
  'browse',
  o.object({
    action: o.constant('browse'),
    target: o.optional(o.argument(o.string(), {
      description: o.message`Issue/PR number, file path, or commit SHA`,
    })),
    branch: o.option('-b', '--branch', o.string(), {
      description: o.message`Select another branch by passing in the branch name`,
    }),
    commit: o.option('-c', '--commit', o.string(), {
      description: o.message`Select another commit by passing in the commit SHA, default is the last commit`,
    }),
    noBrowser: o.option('-n', '--no-browser', {
      description: o.message`Print destination URL instead of opening the browser`,
    }),
    projects: o.option('-p', '--projects', {
      description: o.message`Open repository projects`,
    }),
    releases: o.option('-r', '--releases', {
      description: o.message`Open repository releases`,
    }),
    repo: o.option('-R', '--repo', o.string(), {
      description: o.message`Select another repository using the [HOST/]OWNER/REPO format`,
    }),
    settings: o.option('-s', '--settings', {
      description: o.message`Open repository settings`,
    }),
    wiki: o.option('-w', '--wiki', {
      description: o.message`Open repository wiki`,
    }),
  }),
  {
    brief: o.message`Open repositories, issues, pull requests, and more in the browser`,
    description: o.message`Transition from the terminal to the web browser to view and interact with issues, pull requests, repository content, and more.`,
  },
);
