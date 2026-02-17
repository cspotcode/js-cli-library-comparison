import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'field-delete',
  o.merge(outputParser, o.object({
    action: o.constant('field-delete'),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    id: o.option('--id', o.string(), { description: o.message`ID of the field to delete` }),
  })),
  { brief: o.message`Delete a field in a project` },
);
