import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("hmpi.sg A", {
      name: "hmpi-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1q7kjzyrjwa09.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("hmpi.sg AAAA", {
      name: "hmpi-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1q7kjzyrjwa09.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
