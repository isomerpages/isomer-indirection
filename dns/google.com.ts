import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("google.com A", {
      name: "google-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "test.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("google.com AAAA", {
      name: "google-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "test.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
