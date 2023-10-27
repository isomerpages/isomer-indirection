import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("studentservices.tp.edu.sg A", {
      name: "studentservices-tp-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lzjml9g59vsa.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("studentservices.tp.edu.sg AAAA", {
      name: "studentservices-tp-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1lzjml9g59vsa.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
