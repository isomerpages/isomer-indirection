import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("openhouse.rgs.edu.sg A", {
      name: "openhouse-rgs-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1gk2oklictuvs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("openhouse.rgs.edu.sg AAAA", {
      name: "openhouse-rgs-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1gk2oklictuvs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
