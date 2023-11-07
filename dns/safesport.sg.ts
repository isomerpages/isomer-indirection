import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("safesport.sg A", {
      name: "safesport-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1zlfpk4aa8ble.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("safesport.sg AAAA", {
      name: "safesport-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1zlfpk4aa8ble.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
