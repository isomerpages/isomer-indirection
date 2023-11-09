import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("marinabaycountdown.gov.sg A", {
      name: "marinabaycountdown-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1oy0ti0fj0qua.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("marinabaycountdown.gov.sg AAAA", {
      name: "marinabaycountdown-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1oy0ti0fj0qua.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
