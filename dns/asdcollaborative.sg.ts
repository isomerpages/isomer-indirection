import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("asdcollaborative.sg A", {
      name: "asdcollaborative-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1qwm7mxbe7hdz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("asdcollaborative.sg AAAA", {
      name: "asdcollaborative-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1qwm7mxbe7hdz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
