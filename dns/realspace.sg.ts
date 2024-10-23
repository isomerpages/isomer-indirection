import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("realspace.sg A", {
      name: "realspace-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d5lbwz38nhgvq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("realspace.sg AAAA", {
      name: "realspace-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d5lbwz38nhgvq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
