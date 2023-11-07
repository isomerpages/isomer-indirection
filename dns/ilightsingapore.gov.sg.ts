import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ilightsingapore.gov.sg A", {
      name: "ilightsingapore-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d31feu0ldnwuz6.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ilightsingapore.gov.sg AAAA", {
      name: "ilightsingapore-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d31feu0ldnwuz6.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
