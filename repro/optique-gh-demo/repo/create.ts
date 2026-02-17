import * as o from '@optique/core';

export default o.command(
  'create',
  o.object({
    action: o.constant('create'),
    name: o.optional(o.argument(o.string(), { description: o.message`Repository name` })),
    addReadme: o.option('--add-readme', { description: o.message`Add a README file to the new repository` }),
    clone: o.option('-c', '--clone', { description: o.message`Clone the new repository to the current directory` }),
    description: o.option('-d', '--description', o.string(), { description: o.message`Description of the repository` }),
    disableIssues: o.option('--disable-issues', { description: o.message`Disable issues in the new repository` }),
    disableWiki: o.option('--disable-wiki', { description: o.message`Disable wiki in the new repository` }),
    gitignore: o.option('-g', '--gitignore', o.string(), { description: o.message`Specify a gitignore template for the repository` }),
    homepage: o.option('-h', '--homepage', o.string(), { description: o.message`Repository home page URL` }),
    includeAllBranches: o.option('--include-all-branches', { description: o.message`Include all branches from template repository` }),
    internal: o.option('--internal', { description: o.message`Make the new repository internal` }),
    license: o.option('-l', '--license', o.string(), { description: o.message`License for the repository` }),
    private: o.option('--private', { description: o.message`Make the new repository private` }),
    public: o.option('--public', { description: o.message`Make the new repository public` }),
    push: o.option('--push', { description: o.message`Push local commits to the new repository` }),
    remote: o.option('-r', '--remote', o.string(), { description: o.message`Specify remote name for the new repository` }),
    source: o.option('-s', '--source', o.string(), { description: o.message`Specify path to local repository to use as source` }),
    template: o.option('-t', '--template', o.string(), { description: o.message`Make the new repository based on a template repository` }),
  }),
  { brief: o.message`Create a new repository` },
);
