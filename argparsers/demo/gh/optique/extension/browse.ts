import * as o from '@optique/core';

export default o.command(
  'browse',
  o.object({
    action: o.constant('browse'),
    debug: o.option('--debug', { description: o.message`Log to /tmp/extBrowse-*` }),
    singleColumn: o.option('-s', '--single-column', { description: o.message`Render TUI with only one column of text` }),
  }),
  { brief: o.message`Enter a UI for browsing, adding, and removing extensions` },
);
