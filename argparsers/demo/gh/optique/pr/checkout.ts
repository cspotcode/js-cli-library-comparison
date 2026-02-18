import * as o from '@optique/core';
import { repoFlag } from '../shared.ts';

export default o.command(
  'checkout',
  o.object({
    action: o.constant('checkout'),
    pr: o.argument(o.string(), { description: o.message`Pull request number, URL, or branch` }),
    branch: o.option('-b', '--branch', o.string(), { description: o.message`Local branch name to use (default [the name of the head branch])` }),
    detach: o.option('--detach', { description: o.message`Checkout PR with a detached HEAD` }),
    force: o.option('--force', { description: o.message`Reset the existing local branch to the latest state of the pull request` }),
    recurseSubmodules: o.option('--recurse-submodules', { description: o.message`Update all submodules after checkout` }),
    repo: repoFlag,
  }),
  { brief: o.message`Check out a pull request in git` },
);
