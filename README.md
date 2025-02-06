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
    content: "isomer.gov.sg",
  });

  return [record1];
};
```

We leverage on Pulumi SaaS to store our stacks and config settings.

## Testing

This [branch](https://github.com/isomerpages/isomer-indirection/tree/test/github-actions-integration) is created for the purposes of testing. To add in DNS records in Cloudflare, follow the steps below:

1. Add in a file (eg. blah.isomer.gov.sg) with the syntax described above
2. Push new file to `origin/test/github-actions-integration`
3. Verify that github actions is a success
4. Verify new DNS record updated in Cloudflare
5. Delete newly added file in step 1 in github locally
6. Push changes to `origin/test/github-actions-integration`
