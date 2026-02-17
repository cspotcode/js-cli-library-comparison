import * as o from '@optique/core';

export default o.command(
  'status',
  o.object({
    action: o.constant('status'),
    exclude: o.option('-e', '--exclude', o.string(), {
      description: o.message`Comma separated list of repos to exclude in owner/name format`,
    }),
    org: o.option('-o', '--org', o.string(), {
      description: o.message`Report status within an organization`,
    }),
  }),
  {
    brief: o.message`Print information about relevant issues, pull requests, and notifications across repositories`,
    description: o.message`The status command prints information about your work on GitHub across all the repositories you're subscribed to, including assigned issues, assigned pull requests, review requests, mentions, and repository activity.`,
  },
);
