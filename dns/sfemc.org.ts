import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sfemc.org A", {
      name: "sfemc-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bcvxbg5runv4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sfemc.org AAAA", {
      name: "sfemc-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bcvxbg5runv4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
