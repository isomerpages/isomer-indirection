import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("fpab.healthprofessionals.gov.sg A", {
      name: "fpab-healthprofessionals-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2irkbi7bd8s8f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("fpab.healthprofessionals.gov.sg AAAA", {
      name: "fpab-healthprofessionals-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2irkbi7bd8s8f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
