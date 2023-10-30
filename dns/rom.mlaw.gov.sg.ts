import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("rom.mlaw.gov.sg A", {
      name: "rom-mlaw-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1guqwlbcmdgej.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("rom.mlaw.gov.sg AAAA", {
      name: "rom-mlaw-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1guqwlbcmdgej.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
