import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    name: o.argument(o.string(), { description: o.message`Label name` }),
    color: o.option('-c', '--color', o.string(), { description: o.message`Color of the label` }),
    description: o.option('-d', '--description', o.string(), { description: o.message`Description of the label` }),
    force: o.option('-f', '--force', { description: o.message`Update the label color and description if label already exists` }),
    repo: repoFlag,
  }),
  { brief: o.message`Create a new label` },
);
