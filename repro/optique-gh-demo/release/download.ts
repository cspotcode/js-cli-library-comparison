import * as o from '@optique/core';

export default o.command(
  'download',
  o.object({
    action: o.constant('download'),
    tag: o.optional(o.argument(o.string(), { description: o.message`Tag name` })),
    archive: o.option('--archive', o.string(), { description: o.message`Download the source code archive in the specified format (zip or tar.gz)` }),
    archiveDir: o.option('-A', '--archive-dir', o.string(), { description: o.message`Directory to store archive files` }),
    dir: o.option('-D', '--dir', o.string(), { description: o.message`The directory to download files into (default ".")` }),
    output: o.option('-O', '--output', o.string(), { description: o.message`The file to write a single asset to (use "-" to write to stdout)` }),
    pattern: o.multiple(o.option('-p', '--pattern', o.string(), { description: o.message`Download only assets that match a glob pattern` })),
    skipExisting: o.option('--skip-existing', { description: o.message`Skip downloading when local file is found` }),
  }),
  { brief: o.message`Download release assets` },
);
