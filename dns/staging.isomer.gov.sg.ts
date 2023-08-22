import { Record } from "@pulumi/aws/route53";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("staging.isomer.gov.sg CNAME", {
      name: "isomer-staging",
      type: "CNAME",
      zoneId: zoneId,
      ttl: 3600,
      records: ["isomerstaging-dbca.kxcdn.com"],
    }),
  ];

  return records;
};
