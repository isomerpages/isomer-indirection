import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("nccs.gov.sg A", {
      name: "nccs-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lon43x8fyzpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("nccs.gov.sg AAAA", {
      name: "nccs-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lon43x8fyzpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
