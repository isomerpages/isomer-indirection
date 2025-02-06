import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("leasewise.hack2025.gov.sg A", {
      name: "leasewise-hack2025-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lweiiz0ii5rf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("leasewise.hack2025.gov.sg AAAA", {
      name: "leasewise-hack2025-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lweiiz0ii5rf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
