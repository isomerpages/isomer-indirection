import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("digitalservicesawards.gov.sg A", {
      name: "digitalservicesawards-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "djp6406ghmewg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("digitalservicesawards.gov.sg AAAA", {
      name: "digitalservicesawards-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "djp6406ghmewg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
