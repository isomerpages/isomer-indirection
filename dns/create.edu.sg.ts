import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("create.edu.sg A", {
      name: "create-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d12a2xbq6isln7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("create.edu.sg AAAA", {
      name: "create-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d12a2xbq6isln7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
