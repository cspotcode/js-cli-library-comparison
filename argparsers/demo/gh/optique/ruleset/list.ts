import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'list',
  o.object({
    action: o.constant('list'),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of rulesets to list (default 30)` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`List organization-wide rulesets for the provided organization` }),
    parents: o.option('-p', '--parents', { description: o.message`Whether to include rulesets configured at higher levels that also apply (default true)` }),
    web: o.option('-w', '--web', { description: o.message`Open the list of rulesets in the web browser` }),
    repo: repoFlag,
  }),
  { brief: o.message`List rulesets for a repository or organization` },
);
