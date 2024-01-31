import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("kebunbaru.pa.gov.sg A", {
      name: "kebunbaru-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lbngthw1xk21.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("kebunbaru.pa.gov.sg AAAA", {
      name: "kebunbaru-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lbngthw1xk21.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
