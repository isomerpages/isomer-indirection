import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("brave.sg A", {
      name: "brave-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1df0kxb4xcr0w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("brave.sg AAAA", {
      name: "brave-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1df0kxb4xcr0w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
