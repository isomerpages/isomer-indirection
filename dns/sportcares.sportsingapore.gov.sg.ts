import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sportcares.sportsingapore.gov.sg A", {
      name: "sportcares-sportsingapore-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ojtfxi8728az.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sportcares.sportsingapore.gov.sg AAAA", {
      name: "sportcares-sportsingapore-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ojtfxi8728az.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
