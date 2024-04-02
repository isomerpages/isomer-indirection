import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("scri-symposium.sg A", {
      name: "scri-symposium-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2qk93m7geh1gt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("scri-symposium.sg AAAA", {
      name: "scri-symposium-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2qk93m7geh1gt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
