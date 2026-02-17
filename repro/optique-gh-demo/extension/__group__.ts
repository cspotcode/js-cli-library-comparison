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

The name of the extension repository must start with gh- and it must contain an executable of the same name.`,
  },
);
