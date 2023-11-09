import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("alpshealthcare.com.sg A", {
      name: "alpshealthcare-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d182ug0spt891g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("alpshealthcare.com.sg AAAA", {
      name: "alpshealthcare-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d182ug0spt891g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
