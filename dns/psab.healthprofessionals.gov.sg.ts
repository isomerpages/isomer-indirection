import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("psab.healthprofessionals.gov.sg A", {
      name: "psab-healthprofessionals-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1zlreb37e9stq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("psab.healthprofessionals.gov.sg AAAA", {
      name: "psab-healthprofessionals-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1zlreb37e9stq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
