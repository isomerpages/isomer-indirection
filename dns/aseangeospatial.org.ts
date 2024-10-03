import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("aseangeospatial.org A", {
      name: "aseangeospatial-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dotg6j57wpmhi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("aseangeospatial.org AAAA", {
      name: "aseangeospatial-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dotg6j57wpmhi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
