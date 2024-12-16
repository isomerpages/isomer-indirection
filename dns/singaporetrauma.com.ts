import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("singaporetrauma.com A", {
      name: "singaporetrauma-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2gtufnh46mvv3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("singaporetrauma.com AAAA", {
      name: "singaporetrauma-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2gtufnh46mvv3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
