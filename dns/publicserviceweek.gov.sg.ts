import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("publicserviceweek.gov.sg A", {
      name: "publicserviceweek-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1a2wwy57fq5hi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("publicserviceweek.gov.sg AAAA", {
      name: "publicserviceweek-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1a2wwy57fq5hi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
