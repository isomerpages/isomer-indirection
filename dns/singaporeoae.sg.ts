import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("singaporeoae.sg A", {
      name: "singaporeoae-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d28xdzretsq3u2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("singaporeoae.sg AAAA", {
      name: "singaporeoae-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d28xdzretsq3u2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
