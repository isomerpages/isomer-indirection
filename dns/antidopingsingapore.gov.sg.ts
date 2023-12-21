import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("antidopingsingapore.gov.sg A", {
      name: "antidopingsingapore-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxm0qj2jqp399.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("antidopingsingapore.gov.sg AAAA", {
      name: "antidopingsingapore-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxm0qj2jqp399.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
