import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("kretaayer-kimseng.pa.gov.sg A", {
      name: "kretaayer-kimseng-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1skdq2m05oxx.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("kretaayer-kimseng.pa.gov.sg AAAA", {
      name: "kretaayer-kimseng-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1skdq2m05oxx.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
