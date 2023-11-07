import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("presbyterian.moe.edu.sg A", {
      name: "presbyterian-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1pqcn4y10p1mu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("presbyterian.moe.edu.sg AAAA", {
      name: "presbyterian-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1pqcn4y10p1mu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
