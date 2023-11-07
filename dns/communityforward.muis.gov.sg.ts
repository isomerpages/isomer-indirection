import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("communityforward.muis.gov.sg A", {
      name: "communityforward-muis-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwf0g4zkuvdjf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("communityforward.muis.gov.sg AAAA", {
      name: "communityforward-muis-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwf0g4zkuvdjf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
