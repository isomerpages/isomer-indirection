import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("alicelaunch.com A", {
      name: "alicelaunch-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwt9b4c0px5d2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("alicelaunch.com AAAA", {
      name: "alicelaunch-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwt9b4c0px5d2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
