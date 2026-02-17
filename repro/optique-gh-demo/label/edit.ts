import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'edit',
  o.object({
    action: o.constant('edit'),
    name: o.argument(o.string(), { description: o.message`Label name` }),
    color: o.option('-c', '--color', o.string(), { description: o.message`Color of the label` }),
    description: o.option('-d', '--description', o.string(), { description: o.message`Description of the label` }),
    newName: o.option('-n', '--name', o.string(), { description: o.message`New name of the label` }),
    repo: repoFlag,
  }),
  { brief: o.message`Edit a label` },
);
