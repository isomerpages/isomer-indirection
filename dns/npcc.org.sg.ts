import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("npcc.org.sg A", {
      name: "npcc-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1plxqcjflijac.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("npcc.org.sg AAAA", {
      name: "npcc-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1plxqcjflijac.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
