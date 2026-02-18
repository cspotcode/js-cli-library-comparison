import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'view',
  o.object({
    action: o.constant('view'),
    rulesetId: o.optional(o.argument(o.string(), { description: o.message`Ruleset ID` })),
    org: o.option('-o', '--org', o.string(), { description: o.message`Organization name if the provided ID is an organization-level ruleset` }),
    parents: o.option('-p', '--parents', { description: o.message`Whether to include rulesets configured at higher levels that also apply (default true)` }),
    web: o.option('-w', '--web', { description: o.message`Open the ruleset in the browser` }),
    repo: repoFlag,
  }),
  { brief: o.message`View information about a ruleset` },
);
