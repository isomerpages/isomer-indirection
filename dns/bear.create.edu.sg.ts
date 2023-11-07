import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("bear.create.edu.sg A", {
      name: "bear-create-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dhm3md03b9cg4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("bear.create.edu.sg AAAA", {
      name: "bear-create-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dhm3md03b9cg4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
