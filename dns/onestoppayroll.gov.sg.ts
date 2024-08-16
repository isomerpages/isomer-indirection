import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("onestoppayroll.gov.sg A", {
      name: "onestoppayroll-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1pqoejc4wg49o.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("onestoppayroll.gov.sg AAAA", {
      name: "onestoppayroll-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1pqoejc4wg49o.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
