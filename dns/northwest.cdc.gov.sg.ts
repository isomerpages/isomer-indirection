import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("northwest.cdc.gov.sg A", {
      name: "northwest-cdc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3pv1352wh7zuz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("northwest.cdc.gov.sg AAAA", {
      name: "northwest-cdc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3pv1352wh7zuz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
