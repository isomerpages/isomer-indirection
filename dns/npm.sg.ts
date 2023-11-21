import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("npm.sg A", {
      name: "npm-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2nfk2bru5s6p0.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("npm.sg AAAA", {
      name: "npm-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2nfk2bru5s6p0.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
