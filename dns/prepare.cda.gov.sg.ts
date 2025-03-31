import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("prepare.cda.gov.sg A", {
      name: "prepare-cda-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15m0ffoqcdmdp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("prepare.cda.gov.sg AAAA", {
      name: "prepare-cda-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15m0ffoqcdmdp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
