import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("wis2.asmc.asean.org A", {
      name: "wis2-asmc-asean-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3ll69jdqn8jfc.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("wis2.asmc.asean.org AAAA", {
      name: "wis2-asmc-asean-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3ll69jdqn8jfc.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
