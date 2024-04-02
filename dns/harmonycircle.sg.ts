import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("harmonycircle.sg A", {
      name: "harmonycircle-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2oek2kmsisfok.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("harmonycircle.sg AAAA", {
      name: "harmonycircle-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2oek2kmsisfok.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
