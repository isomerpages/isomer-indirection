import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("centralsingapore.cdc.gov.sg A", {
      name: "centralsingapore-cdc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d203z45n89g5pj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("centralsingapore.cdc.gov.sg AAAA", {
      name: "centralsingapore-cdc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d203z45n89g5pj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
