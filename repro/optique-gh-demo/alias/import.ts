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

Aliases should be defined as a map in YAML, where the keys represent aliases and the values represent the corresponding expansions. An example file should look like the following:

    bugs: issue list --label=bug
    igrep: '!gh issue list --label="$1" | grep "$2"'
    features: |-
        issue list
        --label=enhancement

Use \`-\` to read aliases (in YAML format) from standard input.

The output from \`gh alias list\` can be used to produce a YAML file containing your aliases, which you can use to import them from one machine to another. Run \`gh help alias list\` to learn more.`,
  },
);
