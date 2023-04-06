import { Record } from "@pulumi/cloudflare";

export const createRecords = (zoneId: string): Record[] => {
  const record1 = new Record("kishoreindirectiontest3", {
    name: "kishoreindirectiontest3.isomer.gov.sg",
    type: "CNAME",
    ttl: 120,
    zoneId: zoneId,
    value: "isomer.gov.sg",
  });

  return [record1];
};
