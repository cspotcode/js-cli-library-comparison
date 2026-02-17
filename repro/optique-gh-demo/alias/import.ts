import * as o from '@optique/core';

export default o.command(
  'import',
  o.object({
    action: o.constant('import'),
    file: o.optional(o.argument(o.string(), { description: o.message`YAML file or - for stdin` })),
    clobber: o.option('--clobber', {
      description: o.message`Overwrite existing aliases of the same name`,
    }),
  }),
  {
    brief: o.message`Import aliases from a YAML file`,
    description: o.message`Import aliases from the contents of a YAML file.

Aliases should be defined as a map in YAML, where the keys represent aliases and the values represent the corresponding expansions.`,
  },
);
