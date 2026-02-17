import * as o from '@optique/core';
import code from './code.ts';
import commits from './commits.ts';
import issues from './issues.ts';
import prs from './prs.ts';
import repos from './repos.ts';

export default o.command(
  'search',
  o.or(code, commits, issues, prs, repos),
  {
    brief: o.message`Search for repositories, issues, and pull requests`,
    description: o.message`Search across all of GitHub.`,
  },
);
