import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("15m.sg A", {
      name: "15m-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d33jmuo7lmliyd.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("15m.sg AAAA", {
      name: "15m-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d33jmuo7lmliyd.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
