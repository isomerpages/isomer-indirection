import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("woodlandsringsec.moe.edu.sg A", {
      name: "woodlandsringsec-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dkia00jrz8nvy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("woodlandsringsec.moe.edu.sg AAAA", {
      name: "woodlandsringsec-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dkia00jrz8nvy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
