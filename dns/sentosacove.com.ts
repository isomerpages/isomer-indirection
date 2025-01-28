import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sentosacove.com A", {
      name: "sentosacove-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3o5c4mcxbahsz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sentosacove.com AAAA", {
      name: "sentosacove-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3o5c4mcxbahsz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
