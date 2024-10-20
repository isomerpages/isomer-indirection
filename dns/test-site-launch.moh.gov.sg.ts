import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("test-site-launch.moh.gov.sg A", {
      name: "test-site-launch-moh-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2botckco9j3it.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("test-site-launch.moh.gov.sg AAAA", {
      name: "test-site-launch-moh-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2botckco9j3it.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
