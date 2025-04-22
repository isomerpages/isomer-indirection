import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sab.healthprofessionals.gov.sg A", {
      name: "sab-healthprofessionals-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d18l3wkowoupxs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sab.healthprofessionals.gov.sg AAAA", {
      name: "sab-healthprofessionals-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d18l3wkowoupxs.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
