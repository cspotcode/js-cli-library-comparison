import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'set',
  o.object({
    action: o.constant('set'),
    variableName: o.argument(o.string(), { description: o.message`Variable name` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`The value for the variable (reads from STDIN if not specified)` }),
    env: o.option('-e', '--env', o.string(), { description: o.message`Set deployment environment variable` }),
    envFile: o.option('-f', '--env-file', o.string(), { description: o.message`Load variable names and values from a dotenv-formatted file` }),
    org: o.option('-o', '--org', o.string(), { description: o.message`Set organization variable` }),
    repos: o.option('-r', '--repos', o.string(), { description: o.message`List of repositories that can access an organization variable` }),
    visibility: o.option('--visibility', o.string(), { description: o.message`Set visibility for an organization variable: {all|private|selected} (default "private")` }),
    repo: repoFlag,
  }),
  { brief: o.message`Create or update variables` },
);
