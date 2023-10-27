import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("virtualcampus.tp.edu.sg A", {
      name: "virtualcampus-tp-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "daqaknaxzel70.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("virtualcampus.tp.edu.sg AAAA", {
      name: "virtualcampus-tp-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "daqaknaxzel70.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
