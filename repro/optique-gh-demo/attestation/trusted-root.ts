import * as o from '@optique/core';

export default o.command(
  'trusted-root',
  o.object({
    action: o.constant('trusted-root'),
    hostname: o.option('--hostname', o.string(), { description: o.message`Configure host to use` }),
    tufRoot: o.option('--tuf-root', o.string(), { description: o.message`Path to the TUF root.json file on disk` }),
    tufUrl: o.option('--tuf-url', o.string(), { description: o.message`URL to the TUF repository mirror` }),
    verifyOnly: o.option('--verify-only', { description: o.message`Don't output trusted_root.jsonl contents` }),
  }),
  {
    brief: o.message`Output trusted_root.jsonl contents, likely for offline verification`,
  },
);
