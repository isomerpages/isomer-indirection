import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("tradetrust.io A", {
      name: "tradetrust-io",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d32bzv2hgl34z5.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("tradetrust.io AAAA", {
      name: "tradetrust-io",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d32bzv2hgl34z5.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
