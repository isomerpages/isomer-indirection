import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("healthx.sg A", {
      name: "healthx-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3fz22ahumd1tv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("healthx.sg AAAA", {
      name: "healthx-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3fz22ahumd1tv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
