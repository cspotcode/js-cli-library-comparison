import * as o from '@optique/core';

export default o.command(
  'set',
  o.object({
    action: o.constant('set'),
    alias: o.argument(o.string(), { description: o.message`Alias name` }),
    expansion: o.argument(o.string(), { description: o.message`Command expansion (or - to read from stdin)` }),
    clobber: o.option('--clobber', {
      description: o.message`Overwrite existing aliases of the same name`,
    }),
    shell: o.option('-s', '--shell', {
      description: o.message`Declare an alias to be passed through a shell interpreter`,
    }),
  }),
  {
    brief: o.message`Create a shortcut for a gh command`,
    description: o.message`Define a word that will expand to a full gh command when invoked.

The expansion may specify additional arguments and flags. If the expansion includes positional placeholders such as \`$1\`, extra arguments that follow the alias will be inserted appropriately. Otherwise, extra arguments will be appended to the expanded command.

Use \`-\` as expansion argument to read the expansion string from standard input. This is useful to avoid quoting issues when defining expansions.

If the expansion starts with \`!\` or if ${o.optionName("--shell")} was given, the expansion is a shell expression that will be evaluated through the \`sh\` interpreter when the alias is invoked. This allows for chaining multiple commands via piping and redirection.`,
  },
);
