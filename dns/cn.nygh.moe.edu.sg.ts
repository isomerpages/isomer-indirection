import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("cn.nygh.moe.edu.sg A", {
      name: "cn-nygh-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2133xy0twi89b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("cn.nygh.moe.edu.sg AAAA", {
      name: "cn-nygh-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2133xy0twi89b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
