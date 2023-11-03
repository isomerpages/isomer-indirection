import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("5gacademy.sp.edu.sg A", {
      name: "5gacademy-sp-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fe65sapqzfty.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("5gacademy.sp.edu.sg AAAA", {
      name: "5gacademy-sp-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fe65sapqzfty.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
