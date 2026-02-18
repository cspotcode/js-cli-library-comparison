import * as o from '@optique/core';

export default o.command(
  'unarchive',
  o.object({
    action: o.constant('unarchive'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    yes: o.option('-y', '--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Unarchive a repository` },
);
