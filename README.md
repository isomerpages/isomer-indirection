# Isomer Indirection Layer

This repository is meant to serve as a indirection layer for Isomer for Isomer admins. These DNS records are added directly to our cloudflare on merge to the main branch.

The structure of this layer would be as such:

dns <br/>
\|\_ agency_name.ts

For example, for the agency blah.gov.sg

dns <br/>
|\_\_ blah.gov.sg.ts

The content of the blah.gov.sg.ts file should be as follows:

```
export const createRecords = (zoneId: string): Record[] => {
  const record1 = new Record("blah_gov_sg_indirection", {
    name: "blah.isomer.gov.sg",
    type: "CNAME",
    ttl: 120,
    zoneId: zoneId,
    value: "isomer.gov.sg",
  });

  return [record1];
};
```

We leverage on Pulumi SaaS to store our stacks and config settings.
