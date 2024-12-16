import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";
export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.reach.gov.sg A", {
      name: "reach-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3hvdtv8yh3hmi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
    new Record("www.reach.gov.sg AAAA", {
      name: "reach-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3hvdtv8yh3hmi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];
  return records;
};
