import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("actris.sg A", {
      name: "actris-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3nmv7gntlqi5f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("actris.sg AAAA", {
      name: "actris-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3nmv7gntlqi5f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
