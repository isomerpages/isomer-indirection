import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("moht.com.sg A", {
      name: "moht-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d38ax0gw345p6u.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("moht.com.sg AAAA", {
      name: "moht-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d38ax0gw345p6u.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
