import * as o from '@optique/core';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    gist: o.argument(o.string(), { description: o.message`Gist ID or URL` }),
    filename: o.optional(o.argument(o.string(), { description: o.message`File to edit` })),
    add: o.option('-a', '--add', o.string(), {
      description: o.message`Add a new file to the gist`,
    }),
    desc: o.option('-d', '--desc', o.string(), {
      description: o.message`New description for the gist`,
    }),
    filenameFlag: o.option('-f', '--filename', o.string(), {
      description: o.message`Select a file to edit`,
    }),
    remove: o.option('-r', '--remove', o.string(), {
      description: o.message`Remove a file from the gist`,
    }),
  }),
  {
    brief: o.message`Edit one of your gists`,
  },
);
