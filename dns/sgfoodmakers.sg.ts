import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sgfoodmakers.sg A", {
      name: "sgfoodmakers-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dv2wuj8lk87oy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sgfoodmakers.sg AAAA", {
      name: "sgfoodmakers-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dv2wuj8lk87oy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
