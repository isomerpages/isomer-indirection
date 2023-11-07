import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("parkviewpri.moe.edu.sg A", {
      name: "parkviewpri-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d13yy9xlx3a3u4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("parkviewpri.moe.edu.sg AAAA", {
      name: "parkviewpri-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d13yy9xlx3a3u4.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
