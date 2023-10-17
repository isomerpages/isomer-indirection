import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("facsmab.org A", {
      name: "facsmab-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17guw0ohkecxs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("facsmab.org AAAA", {
      name: "facsmab-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17guw0ohkecxs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
