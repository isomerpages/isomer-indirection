import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("egh.com.sg A", {
      name: "egh-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3v97bjfhonlzw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("egh.com.sg AAAA", {
      name: "egh-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3v97bjfhonlzw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
