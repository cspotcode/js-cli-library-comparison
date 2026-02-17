import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(outputParser, o.object({
    action: o.constant('list'),
    excludeDrafts: o.option('--exclude-drafts', { description: o.message`Exclude draft releases` }),
    excludePreReleases: o.option('--exclude-pre-releases', { description: o.message`Exclude pre-releases` }),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of items to fetch (default 30)` }),
    order: o.option('--order', o.string(), { description: o.message`Order of releases returned: {asc|desc}` }),
  })),
  { brief: o.message`List releases in a repository` },
);
