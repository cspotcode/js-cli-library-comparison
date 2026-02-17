import * as o from '@optique/core';
import download from './download.ts';
import trustedRoot from './trusted-root.ts';
import verify from './verify.ts';

export default o.command(
  'attestation',
  o.or(download, trustedRoot, verify),
  {
    brief: o.message`Work with artifact attestations`,
    description: o.message`Download and verify artifact attestations.`,
  },
);
