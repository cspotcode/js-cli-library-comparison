import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'field-create',
  o.merge(outputParser, o.object({
    action: o.constant('field-create'),
    number: o.optional(o.argument(o.string(), { description: o.message`Project number` })),
    dataType: o.option('--data-type', o.string(), { description: o.message`DataType of the new field: {text|single_select|date|number|iteration}` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    name: o.option('--name', o.string(), { description: o.message`Name of the new field` }),
    owner: o.option('--owner', o.string(), { description: o.message`Login of the owner (user or org)` }),
    singleSelectOptions: o.option('--single-select-options', o.string(), { description: o.message`Options for single select field (comma-separated)` }),
  })),
  { brief: o.message`Create a field in a project` },
);
