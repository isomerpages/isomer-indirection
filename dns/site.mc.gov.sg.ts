import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("site.mc.gov.sg A", {
      name: "site-mc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "das8ubmqc71q2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("site.mc.gov.sg AAAA", {
      name: "site-mc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "das8ubmqc71q2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
