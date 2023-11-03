import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sp-cdio-centreforteaching.sp.edu.sg A", {
      name: "sp-cdio-centreforteaching-sp-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3kkfx4zaynw7o.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sp-cdio-centreforteaching.sp.edu.sg AAAA", {
      name: "sp-cdio-centreforteaching-sp-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3kkfx4zaynw7o.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
