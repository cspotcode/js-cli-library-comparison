import * as o from '@optique/core';
import clearCache from './clear-cache.ts';
import get from './get.ts';
import list from './list.ts';
import set from './set.ts';

export default o.command(
  'config',
  o.or(clearCache, get, list, set),
  {
    brief: o.message`Manage configuration for gh`,
    description: o.message`Display or change configuration settings for gh.

Current respected settings:
- \`git_protocol\`: the protocol to use for git clone and push operations \`{https | ssh}\` (default \`https\`)
- \`editor\`: the text editor program to use for authoring text
- \`prompt\`: toggle interactive prompting in the terminal \`{enabled | disabled}\` (default \`enabled\`)
- \`prefer_editor_prompt\`: toggle preference for editor-based interactive prompting in the terminal \`{enabled | disabled}\` (default \`disabled\`)
- \`pager\`: the terminal pager program to send standard output to
- \`http_unix_socket\`: the path to a Unix socket through which to make an HTTP connection
- \`browser\`: the web browser to use for opening URLs
- \`color_labels\`: whether to display labels using their RGB hex color codes in terminals that support truecolor \`{enabled | disabled}\` (default \`disabled\`)
- \`accessible_colors\`: whether customizable, 4-bit accessible colors should be used \`{enabled | disabled}\` (default \`disabled\`)
- \`accessible_prompter\`: whether an accessible prompter should be used \`{enabled | disabled}\` (default \`disabled\`)
- \`spinner\`: whether to use a animated spinner as a progress indicator \`{enabled | disabled}\` (default \`enabled\`)`,
  },
);
