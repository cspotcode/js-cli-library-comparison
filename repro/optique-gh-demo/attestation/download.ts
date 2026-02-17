import * as o from '@optique/core';

export default o.command(
  'download',
  o.object({
    action: o.constant('download'),
    artifact: o.argument(o.string(), { description: o.message`File path or oci://<image-uri>` }),
    digestAlg: o.option('-d', '--digest-alg', o.string(), { description: o.message`The algorithm used to compute a digest of the artifact: {sha256|sha512} (default "sha256")` }),
    hostname: o.option('--hostname', o.string(), { description: o.message`Configure host to use` }),
    limit: o.option('-L', '--limit', o.string(), { description: o.message`Maximum number of attestations to fetch (default 30)` }),
    owner: o.option('-o', '--owner', o.string(), { description: o.message`GitHub organization to scope attestation lookup by` }),
    predicateType: o.option('--predicate-type', o.string(), { description: o.message`Filter attestations by provided predicate type` }),
    repo: o.option('-R', '--repo', o.string(), { description: o.message`Repository name in the format <owner>/<repo>` }),
  }),
  {
    brief: o.message`Download an artifact's attestations for offline use`,
  },
);
