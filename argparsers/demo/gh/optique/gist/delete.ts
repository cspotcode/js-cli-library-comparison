import * as o from '@optique/core';

export default o.command(
  'delete',
  o.object({
    action: o.constant('delete'),
    gist: o.argument(o.string(), { description: o.message`Gist ID or URL` }),
    yes: o.option('--yes', { description: o.message`Confirm deletion without prompting` }),
  }),
  {
    brief: o.message`Delete a gist`,
  },
);
