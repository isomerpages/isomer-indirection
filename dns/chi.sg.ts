import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("chi.sg A", {
      name: "chi-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2xd32qemdmd0c.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("chi.sg AAAA", {
      name: "chi-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2xd32qemdmd0c.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
