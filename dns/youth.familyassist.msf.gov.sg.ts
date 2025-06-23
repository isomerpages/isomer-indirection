import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("youth.familyassist.msf.gov.sg A", {
      name: "youth-familyassist-msf-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2khaov35vp8yi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("youth.familyassist.msf.gov.sg AAAA", {
      name: "youth-familyassist-msf-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2khaov35vp8yi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
