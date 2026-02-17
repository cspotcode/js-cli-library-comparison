import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'revert',
  o.object({
    action: o.constant('revert'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    body: o.option('-b', '--body', o.string(), { description: o.message`Body for the revert pull request` }),
    bodyFile: o.option('-F', '--body-file', o.string(), { description: o.message`Read body text from file (use "-" to read from stdin)` }),
    draft: o.option('-d', '--draft', { description: o.message`Mark revert pull request as a draft` }),
    noMaintainerEdit: o.option('--no-maintainer-edit', { description: o.message`Disable maintainer's ability to modify revert pull request` }),
    title: o.option('-t', '--title', o.string(), { description: o.message`Title for the revert pull request` }),
    repo: repoFlag,
  }),
  { brief: o.message`Revert a pull request` },
);
