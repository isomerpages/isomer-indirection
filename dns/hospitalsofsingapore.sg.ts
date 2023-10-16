import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("hospitalsofsingapore.sg A", {
      name: "hospitalsofsingapore-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1hcodgvxxjpo1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("hospitalsofsingapore.sg AAAA", {
      name: "hospitalsofsingapore-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1hcodgvxxjpo1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
