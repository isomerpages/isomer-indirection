import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("gea.gov.sg A", {
      name: "gea-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dvj95klqemsyq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("gea.gov.sg AAAA", {
      name: "gea-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dvj95klqemsyq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
