import { Record } from "@pulumi/cloudflare";

export const createRecords = (zoneId: string): Record[] => {
  const record1 = new Record("kishoreindirectiontest10", {
    name: "kishoreindirectiontest10.isomer.gov.sg",
    type: "CNAME",
    ttl: 120,
    zoneId: zoneId,
    value: "www.isomer.gov.sg",
  });

  return [record1];
};
