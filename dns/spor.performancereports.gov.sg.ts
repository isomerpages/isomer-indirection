import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";
export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("spor.performancereports.gov.sg A", {
      name: "spor-performancereports-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d22qln63izve6v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
    new Record("spor.performancereports.gov.sg AAAA", {
      name: "spor-performancereports-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d22qln63izve6v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];
  return records;
};
