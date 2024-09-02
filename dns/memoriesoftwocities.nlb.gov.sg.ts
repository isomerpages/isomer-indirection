import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("memoriesoftwocities.nlb.gov.sg A", {
      name: "memoriesoftwocities-nlb-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2idviwwdlr4f2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("memoriesoftwocities.nlb.gov.sg AAAA", {
      name: "memoriesoftwocities-nlb-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2idviwwdlr4f2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
