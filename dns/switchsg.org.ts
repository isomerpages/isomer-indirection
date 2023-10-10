import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("switchsg.org A", {
      name: "switchsg-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15tni3xrntzma.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("switchsg.org AAAA", {
      name: "switchsg-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15tni3xrntzma.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
