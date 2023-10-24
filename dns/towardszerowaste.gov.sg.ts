import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("towardszerowaste.gov.sg A", {
      name: "towardszerowaste-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1q0g0r6h0s3w7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("towardszerowaste.gov.sg AAAA", {
      name: "towardszerowaste-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1q0g0r6h0s3w7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
