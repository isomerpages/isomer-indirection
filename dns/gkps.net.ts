import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("gkps.net A", {
      name: "gkps-net",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1uvdh5m5cxpse.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("gkps.net AAAA", {
      name: "gkps-net",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1uvdh5m5cxpse.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
