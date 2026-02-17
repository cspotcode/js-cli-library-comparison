import * as o from '@optique/core';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    desc: o.option('-d', '--desc', o.string(), {
      description: o.message`A description for this gist`,
    }),
    filename: o.option('-f', '--filename', o.string(), {
      description: o.message`Provide a filename to be used when reading from standard input`,
    }),
    public_: o.option('-p', '--public', {
      description: o.message`List the gist publicly (default "secret")`,
    }),
    web: o.option('-w', '--web', {
      description: o.message`Open the web browser with created gist`,
    }),
  }),
  {
    brief: o.message`Create a new gist`,
    description: o.message`Create a new GitHub gist with given contents.

Gists can be created from one or multiple files. Alternatively, pass \`-\` as filename to read from standard input.

By default, gists are secret; use ${o.optionName("--public")} to make publicly listed ones.`,
  },
);
