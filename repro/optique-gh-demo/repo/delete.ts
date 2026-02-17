import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    yes: o.option('--yes', { description: o.message`Skip the confirmation prompt` }),
  }),
  { brief: o.message`Delete a repository` },
);
