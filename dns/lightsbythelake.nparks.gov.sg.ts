import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("lightsbythelake.nparks.gov.sg A", {
      name: "lightsbythelake-nparks-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3oaj2sp8pnby1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("lightsbythelake.nparks.gov.sg AAAA", {
      name: "lightsbythelake-nparks-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3oaj2sp8pnby1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
