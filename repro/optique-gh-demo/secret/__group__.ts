import * as o from '@optique/core';
import delete_ from './delete.ts';
import list from './list.ts';
import set from './set.ts';

export default o.command(
  'secret',
  o.or(delete_, list, set),
  {
    brief: o.message`Manage GitHub secrets`,
    description: o.message`Secrets can be set at the repository, or organization level for use in GitHub Actions or Dependabot. User, organization, and repository secrets can be set for use in GitHub Codespaces. Environment secrets can be set for use in GitHub Actions. Run \`gh help secret set\` to learn how to get started.`,
  },
);
