import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("mlc.sg A", {
      name: "mlc-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1ko05no2n1c01.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("mlc.sg AAAA", {
      name: "mlc-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1ko05no2n1c01.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
