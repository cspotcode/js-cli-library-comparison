import * as o from '@optique/core';

export default o.command(
  'upgrade',
  o.object({
    action: o.constant('upgrade'),
    name: o.optional(o.argument(o.string(), { description: o.message`Extension name` })),
    all: o.option('--all', { description: o.message`Upgrade all extensions` }),
    dryRun: o.option('--dry-run', { description: o.message`Only display upgrades` }),
    force: o.option('--force', { description: o.message`Force upgrade extension` }),
  }),
  { brief: o.message`Upgrade installed extensions` },
);
