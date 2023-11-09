import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("cadence-cvd.sg A", {
      name: "cadence-cvd-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d21uswy3b4usht.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("cadence-cvd.sg AAAA", {
      name: "cadence-cvd-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d21uswy3b4usht.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
