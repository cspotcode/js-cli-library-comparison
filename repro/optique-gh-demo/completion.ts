import * as o from '@optique/core';

export default o.command(
  'completion',
  o.object({
    action: o.constant('completion'),
    shell: o.option('-s', '--shell', o.string(), {
      description: o.message`Shell type: {bash|zsh|fish|powershell}`,
    }),
  }),
  {
    brief: o.message`Generate shell completion scripts`,
    description: o.message`Generate shell completion scripts for GitHub CLI commands.

When installing GitHub CLI through a package manager, it's possible that no additional shell configuration is necessary to gain completion support.`,
  },
);
