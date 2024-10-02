import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("workbuddy.defence.gov.sg A", {
      name: "workbuddy-defence-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d19b6ef8yd01ao.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("workbuddy.defence.gov.sg AAAA", {
      name: "workbuddy-defence-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d19b6ef8yd01ao.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
