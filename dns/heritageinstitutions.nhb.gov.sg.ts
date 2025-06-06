import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("heritageinstitutions.nhb.gov.sg A", {
      name: "heritageinstitutions-nhb-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3tsu5x6pmiatx.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("heritageinstitutions.nhb.gov.sg AAAA", {
      name: "heritageinstitutions-nhb-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3tsu5x6pmiatx.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
