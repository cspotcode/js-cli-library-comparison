import * as o from '@optique/core';

export default o.command(
  'clear-cache',
  o.object({ action: o.constant('clear-cache') }),
  {
    brief: o.message`Clear the cli cache`,
  },
);
