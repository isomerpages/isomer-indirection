import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("childrenandteens.nlb.gov.sg A", {
      name: "childrenandteens-nlb-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2fc6p0wxaq8au.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("childrenandteens.nlb.gov.sg AAAA", {
      name: "childrenandteens-nlb-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2fc6p0wxaq8au.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
