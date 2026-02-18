import * as o from '@optique/core';
import check from './check.ts';
import list from './list.ts';
import view from './view.ts';

export default o.command(
  'ruleset',
  o.or(check, list, view),
  {
    brief: o.message`View info about repo rulesets`,
    description: o.message`Repository rulesets are a way to define a set of rules that apply to a repository. These commands allow you to view information about them.`,
  },
);
