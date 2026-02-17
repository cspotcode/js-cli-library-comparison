import * as o from '@optique/core';
import clearCache from './clear-cache.ts';
import get from './get.ts';
import list from './list.ts';
import set from './set.ts';

export default o.command(
  'config',
  o.or(clearCache, get, list, set),
  {
    brief: o.message`Manage configuration for gh`,
    description: o.message`Display or change configuration settings for gh.`,
  },
);
