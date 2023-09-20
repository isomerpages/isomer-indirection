import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("weightsandmeasures.gov.sg A", {
      name: "weightsandmeasures-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17cuj7aucxwpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("weightsandmeasures.gov.sg AAAA", {
      name: "weightsandmeasures-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d17cuj7aucxwpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
