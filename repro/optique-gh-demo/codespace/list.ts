import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'list',
  o.merge(outputParser, o.object({
    action: o.constant('list'),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of codespaces to list (default 30)` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`The login handle of the organization` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Repository name with owner: user/repo` }),
    repoOwner: o.option('--repo-owner', o.string(), { description: o.message`Filter codespace selection by repository owner (username or org)` }),
    user: o.option('-u', '--user', o.string(), { description: o.message`The username to list codespaces for (used with --org)` }),
    web: o.option('-w', '--web', { description: o.message`List codespaces in the web browser` }),
  })),
  { brief: o.message`List codespaces` },
);
