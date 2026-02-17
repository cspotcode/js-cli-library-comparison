import * as o from '@optique/core';
import { outputParser } from '../shared.ts';

export default o.command(
  'item-edit',
  o.merge(outputParser, o.object({
    action: o.constant('item-edit'),
    body: o.option('--body', o.string(), { description: o.message`Body of the draft issue item` }),
    clear: o.option('--clear', { description: o.message`Remove field value` }),
    date: o.option('--date', o.string(), { description: o.message`The date value to set for the field (format: YYYY-MM-DD)` }),
    fieldId: o.option('--field-id', o.string(), { description: o.message`ID of the field to update` }),
    format: o.option('--format', o.string(), { description: o.message`Output format: {json}` }),
    id: o.option('--id', o.string(), { description: o.message`ID of the item to edit` }),
    iterationId: o.option('--iteration-id', o.string(), { description: o.message`ID of the iteration value to set for the field` }),
    number: o.option('--number', o.string(), { description: o.message`The number value to set for the field` }),
    projectId: o.option('--project-id', o.string(), { description: o.message`ID of the project to which the field belongs to` }),
    singleSelectOptionId: o.option('--single-select-option-id', o.string(), { description: o.message`ID of the single select option value to set for the field` }),
    text: o.option('--text', o.string(), { description: o.message`The text value to set for the field` }),
    title: o.option('--title', o.string(), { description: o.message`Title of the draft issue item` }),
  })),
  { brief: o.message`Edit an item in a project` },
);
