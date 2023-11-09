import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("cares.create.edu.sg A", {
      name: "cares-create-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "djxqs7qq04vvj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("cares.create.edu.sg AAAA", {
      name: "cares-create-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "djxqs7qq04vvj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
