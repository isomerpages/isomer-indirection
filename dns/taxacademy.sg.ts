import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("taxacademy.sg A", {
      name: "taxacademy-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3h9ywtj9spktk.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("taxacademy.sg AAAA", {
      name: "taxacademy-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3h9ywtj9spktk.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
