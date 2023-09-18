import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("aic-yearbook.sg A", {
      name: "aic-yearbook-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1murixbqurdw1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("aic-yearbook.sg AAAA", {
      name: "aic-yearbook-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1murixbqurdw1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
