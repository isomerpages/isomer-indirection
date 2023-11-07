import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("redirect.ssg-wsg.gov.sg A", {
      name: "redirect-ssg-wsg-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "db7547t1guhpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("redirect.ssg-wsg.gov.sg AAAA", {
      name: "redirect-ssg-wsg-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "db7547t1guhpj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
