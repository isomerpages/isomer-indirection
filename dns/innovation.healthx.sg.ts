import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("innovation.healthx.sg A", {
      name: "innovation-healthx-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39ljf22wy6sqp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("innovation.healthx.sg AAAA", {
      name: "innovation-healthx-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39ljf22wy6sqp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
