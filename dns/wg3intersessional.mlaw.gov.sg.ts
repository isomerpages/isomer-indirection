import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("wg3intersessional.mlaw.gov.sg A", {
      name: "wg3intersessional-mlaw-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dnyjyfk9f2u0h.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("wg3intersessional.mlaw.gov.sg AAAA", {
      name: "wg3intersessional-mlaw-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dnyjyfk9f2u0h.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
