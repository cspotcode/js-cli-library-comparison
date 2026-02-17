import * as o from '@optique/core';
import { repoFlag, outputParser } from '../shared.ts';

export default o.command(
  'checks',
  o.merge(outputParser, o.object({
    action: o.constant('checks'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    failFast: o.option('--fail-fast', { description: o.message`Exit watch mode on first check failure` }),
    interval: o.option('-i', '--interval', o.string(), { description: o.message`Refresh interval in seconds when using --watch flag (default 10)` }),
    required: o.option('--required', { description: o.message`Only show checks that are required` }),
    watch: o.option('--watch', { description: o.message`Watch checks until they finish` }),
    web: o.option('-w', '--web', { description: o.message`Open the web browser to show details about checks` }),
    repo: repoFlag,
  })),
  { brief: o.message`Show CI status for a single pull request` },
);
