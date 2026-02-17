import * as o from '@optique/core';

export default o.command(
  'clone',
  o.object({
    action: o.constant('clone'),
    repository: o.argument(o.string(), { description: o.message`Repository name` }),
    directory: o.optional(o.argument(o.string(), { description: o.message`Target directory` })),
    upstreamRemoteName: o.option('-u', '--upstream-remote-name', o.string(), { description: o.message`Upstream remote name when cloning a fork (default "upstream")` }),
  }),
  { brief: o.message`Clone a repository locally` },
);
