import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";
export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.mse.gov.sg A", {
      name: "mse-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3n65o82kxpqw1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
    new Record("www.mse.gov.sg AAAA", {
      name: "mse-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3n65o82kxpqw1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];
  return records;
};
