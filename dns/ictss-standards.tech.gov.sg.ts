import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ictss-standards.tech.gov.sg A", {
      name: "ictss-standards-tech-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d224wmzsbjta77.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ictss-standards.tech.gov.sg AAAA", {
      name: "ictss-standards-tech-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d224wmzsbjta77.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
