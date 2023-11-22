import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("carbonmarkets-cooperation.gov.sg A", {
      name: "carbonmarkets-cooperation-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d391p0ewxz94pu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("carbonmarkets-cooperation.gov.sg AAAA", {
      name: "carbonmarkets-cooperation-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d391p0ewxz94pu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
