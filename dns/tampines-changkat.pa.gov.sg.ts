import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("tampines-changkat.pa.gov.sg A", {
      name: "tampines-changkat-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1aggn9jmwzl6n.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("tampines-changkat.pa.gov.sg AAAA", {
      name: "tampines-changkat-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1aggn9jmwzl6n.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
