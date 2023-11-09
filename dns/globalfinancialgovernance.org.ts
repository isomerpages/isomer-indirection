import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("globalfinancialgovernance.org A", {
      name: "globalfinancialgovernance-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1av3cypsw1dln.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("globalfinancialgovernance.org AAAA", {
      name: "globalfinancialgovernance-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1av3cypsw1dln.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
