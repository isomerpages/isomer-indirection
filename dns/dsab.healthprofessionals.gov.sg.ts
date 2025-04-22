import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("dsab.healthprofessionals.gov.sg A", {
      name: "dsab-healthprofessionals-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2wsygofegucea.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("dsab.healthprofessionals.gov.sg AAAA", {
      name: "dsab-healthprofessionals-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2wsygofegucea.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
