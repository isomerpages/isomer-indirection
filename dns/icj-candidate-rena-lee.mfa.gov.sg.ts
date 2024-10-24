import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("icj-candidate-rena-lee.mfa.gov.sg A", {
      name: "icj-candidate-rena-lee-mfa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwvssm7r00dl3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("icj-candidate-rena-lee.mfa.gov.sg AAAA", {
      name: "icj-candidate-rena-lee-mfa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dwvssm7r00dl3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
