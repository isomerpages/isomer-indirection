import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("parking.sg A", {
      name: "parking-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1c4g8bycek348.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("parking.sg AAAA", {
      name: "parking-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1c4g8bycek348.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
