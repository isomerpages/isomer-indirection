import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("test-aws.test-isomer.gov.sg A", {
      name: "isomeraws",
      type: "A",
      zoneId: zoneId,
      ttl: 3600,
      aliases: [
        {
          name: "d280dyp6teavt9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: true,
        },
      ],
    }),

    new Record("test-aws.test-isomer.gov.sg AAAA", {
      name: "isomeraws",
      type: "AAAA",
      zoneId: zoneId,
      ttl: 3600,
      aliases: [
        {
          name: "d280dyp6teavt9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: true,
        },
      ],
    }),
  ];

  return records;
};
