import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("southeast.cdc.gov.sg A", {
      name: "southeast-cdc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39qp5mss6wn1r.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("southeast.cdc.gov.sg AAAA", {
      name: "southeast-cdc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39qp5mss6wn1r.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
