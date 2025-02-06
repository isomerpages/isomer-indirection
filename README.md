# Isomer Indirection Layer

This repository is meant to serve as a indirection layer as part of Isomer's site infrastructure. The hostedon.isomer.gov.sg is delegated from Cloudflare to AWS Route 53, and this repository contains all sites currently hosted on Isomer.

We leverage on Pulumi SaaS to store our stacks and config settings, and the stack is connected to both Cloudflare (for the zone delegation) and AWS (to configure the records on the indirection domain).

The structure of this layer would be as such:

dns <br/>
\|\_ blah.gov.sg.ts

For example, for the agency's website at www.blah.gov.sg.

The content of the blah.gov.sg.ts file should be as follows:

```ts
import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("blah.gov.sg A", {
      name: "blah-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d0000000000000.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("blah.gov.sg AAAA", {
      name: "blah-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d0000000000000.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
```

Some rules:

1. The indirection domain (the part before the `.hostedon.isomer.gov.sg`) should not contain any dots. Hence, convert all the dots in the actual domain into dashes (e.g. `test.blah.gov.sg` becomes `test-blah-gov-sg`).
1. If the site is hosted on the `www` domain of an apex domain (e.g. `www.blah.gov.sg`), the name of the record should **not** include the `www` part.
   1. For example, if the site is `www.open.gov.sg` and the apex domain is `open.gov.sg`. The name of the record should be `open.gov.sg` and the indirection domain should be `open-gov-sg.hostedon.isomer.gov.sg`.
1. The site should **not** be hosted directly on the apex domain and instead, it should have a `www` prepended, with the apex domain pointing to the Isomer redirection service. The only exception is `www.gov.sg`.
