import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("smart.create.edu.sg A", {
      name: "smart-create-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "diptftdsj34em.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("smart.create.edu.sg AAAA", {
      name: "smart-create-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "diptftdsj34em.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
