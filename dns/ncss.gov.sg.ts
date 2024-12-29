import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";
export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.ncss.gov.sg A", {
      name: "ncss-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dm9hx57a07d02.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
    new Record("www.ncss.gov.sg AAAA", {
      name: "ncss-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dm9hx57a07d02.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];
  return records;
};
