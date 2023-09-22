import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("asean-ifce.com A", {
      name: "asean-ifce-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1yw5qi5kxskly.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("asean-ifce.com AAAA", {
      name: "asean-ifce-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1yw5qi5kxskly.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
