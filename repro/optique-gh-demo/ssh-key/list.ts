import * as o from '@optique/core';

export default o.command(
  'list',
  o.object({ action: o.constant('list') }),
  { brief: o.message`Lists SSH keys in your GitHub account` },
);
