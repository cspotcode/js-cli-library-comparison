import * as o from '@optique/core';

export default o.command(
  'archive',
  o.object({
    action: o.constant('archive'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Archive a repository` },
);
