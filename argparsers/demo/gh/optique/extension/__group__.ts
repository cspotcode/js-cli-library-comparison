import * as o from '@optique/core';
import browse from './browse.ts';
import create from './create.ts';
import install from './install.ts';
import list from './list.ts';
import remove from './remove.ts';
import search from './search.ts';
import upgrade from './upgrade.ts';

export default o.command(
  'extension',
  o.or(browse, create, install, list, remove, search, upgrade),
  {
    brief: o.message`Manage gh extensions`,
    description: o.message`GitHub CLI extensions are repositories that provide additional gh commands.

The name of the extension repository must start with \`gh-\` and it must contain an executable of the same name. All arguments passed to the \`gh <extname>\` invocation will be forwarded to the \`gh-<extname>\` executable of the extension.

An extension cannot override any of the core gh commands. If an extension name conflicts with a core gh command, you can use \`gh extension exec <extname>\`.

When an extension is executed, gh will check for new versions once every 24 hours and display an upgrade notice. See \`gh help environment\` for information on disabling extension notices.

For the list of available extensions, see ${o.link("https://github.com/topics/gh-extension")}.`,
  },
);
