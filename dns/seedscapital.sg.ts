import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("seedscapital.sg A", {
      name: "seedscapital-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ck8rwoz4t8qp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("seedscapital.sg AAAA", {
      name: "seedscapital-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ck8rwoz4t8qp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
