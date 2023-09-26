import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("healthcarecorps.gov.sg A", {
      name: "healthcarecorps-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d20692g9ynfi7x.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("healthcarecorps.gov.sg AAAA", {
      name: "healthcarecorps-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d20692g9ynfi7x.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
