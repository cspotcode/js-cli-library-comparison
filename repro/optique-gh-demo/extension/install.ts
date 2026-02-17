import * as o from '@optique/core';

export default o.command(
  'install',
  o.object({
    action: o.constant('install'),
    repository: o.argument(o.string(), { description: o.message`Repository (OWNER/REPO, URL, or . for local)` }),
    force: o.option('--force', { description: o.message`Force upgrade extension, or ignore if latest already installed` }),
    pin: o.option('--pin', o.string(), { description: o.message`Pin extension to a release tag or commit ref` }),
  }),
  {
    brief: o.message`Install a gh extension from a repository`,
    description: o.message`Install a GitHub CLI extension from a GitHub or local repository.`,
  },
);
