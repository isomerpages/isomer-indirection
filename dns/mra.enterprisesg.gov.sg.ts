import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("mra.enterprisesg.gov.sg A", {
      name: "mra-enterprisesg-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddnhwnxx6sok9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("mra.enterprisesg.gov.sg AAAA", {
      name: "mra-enterprisesg-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddnhwnxx6sok9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
