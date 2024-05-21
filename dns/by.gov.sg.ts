import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("by.gov.sg A", {
      name: "by-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17trx4ytd3j7b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("by.gov.sg AAAA", {
      name: "by-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17trx4ytd3j7b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
