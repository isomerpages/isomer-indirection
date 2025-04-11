import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("marsiling.pa.gov.sg A", {
      name: "marsiling-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmwlhzibntutv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("marsiling.pa.gov.sg AAAA", {
      name: "marsiling-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmwlhzibntutv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
