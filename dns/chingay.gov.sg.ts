import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("chingay.gov.sg A", {
      name: "chingay-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "drc9y2w7wz1p.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("chingay.gov.sg AAAA", {
      name: "chingay-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "drc9y2w7wz1p.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
