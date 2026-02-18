import * as o from '@optique/core';

// --repo flag that appears on many commands
export const repoFlag = o.option('-R', '--repo', o.string(), {
  description: o.message`Select another repository using the [HOST/]OWNER/REPO format`,
});

// Output flags shared across many commands (jq, json, template)
export const outputParser = o.object({
  jq: o.option('-q', '--jq', o.string(), {
    description: o.message`Filter JSON output using a jq expression`,
  }),
  json: o.option('--json', o.string(), {
    description: o.message`Output JSON with the specified fields`,
  }),
  template: o.option('-t', '--template', o.string(), {
    description: o.message`Format JSON output using a Go template; see "gh help formatting"`,
  }),
});
