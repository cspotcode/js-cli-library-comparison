import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'set',
  o.object({
    action: o.constant('set'),
    secretName: o.argument(o.string(), { description: o.message`Secret name` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`The value for the secret (reads from STDIN if not specified)` }),
    env: o.option('-e', '--env', o.string(), { description: o.message`Set deployment environment secret` }),
    envFile: o.option('-f', '--env-file', o.string(), { description: o.message`Load secret names and values from a dotenv-formatted file` }),
    noStore: o.option('--no-store', { description: o.message`Print the encrypted, base64-encoded value instead of storing it on GitHub` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`Set organization secret` }),
    repos: o.option('-r', '--repos', o.string(), { description: o.message`List of repositories that can access an organization or user secret` }),
    user: o.option('-u', '--user', { description: o.message`Set a secret for your user` }),
    visibility: o.option('--visibility', o.string(), { description: o.message`Set visibility for an organization secret: {all|private|selected} (default "private")` }),
    repo: repoFlag,
  }),
  {
    brief: o.message`Create or update secrets`,
    description: o.message`Secrets can be set at the repository, or organization level for use in GitHub Actions or Dependabot.`,
  },
);
