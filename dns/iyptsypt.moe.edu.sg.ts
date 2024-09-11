import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("iyptsypt.moe.edu.sg A", {
      name: "iyptsypt-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dykcya1b7k9yw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("iyptsypt.moe.edu.sg AAAA", {
      name: "iyptsypt-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dykcya1b7k9yw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
