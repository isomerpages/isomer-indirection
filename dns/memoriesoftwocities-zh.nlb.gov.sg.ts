import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("memoriesoftwocities-zh.nlb.gov.sg A", {
      name: "memoriesoftwocities-zh-nlb-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d7n24gfdfn99n.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("memoriesoftwocities-zh.nlb.gov.sg AAAA", {
      name: "memoriesoftwocities-zh-nlb-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d7n24gfdfn99n.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
