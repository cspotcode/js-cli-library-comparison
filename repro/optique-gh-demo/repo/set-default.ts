import * as o from '@optique/core';

export default o.command(
  'set-default',
  o.object({
    action: o.constant('set-default'),
    repository: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    unset: o.option('--unset', { description: o.message`Unset the current default repository` }),
    view: o.option('-v', '--view', { description: o.message`View the current default repository` }),
  }),
  { brief: o.message`Set default remote repository` },
);
