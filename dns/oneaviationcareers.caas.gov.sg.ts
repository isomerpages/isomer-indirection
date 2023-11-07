import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("oneaviationcareers.caas.gov.sg A", {
      name: "oneaviationcareers-caas-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dvuwsm53lcfam.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("oneaviationcareers.caas.gov.sg AAAA", {
      name: "oneaviationcareers-caas-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dvuwsm53lcfam.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
