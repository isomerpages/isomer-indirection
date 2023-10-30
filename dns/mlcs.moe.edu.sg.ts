import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("mlcs.moe.edu.sg A", {
      name: "mlcs-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1wrxig9opxi5m.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("mlcs.moe.edu.sg AAAA", {
      name: "mlcs-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1wrxig9opxi5m.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
