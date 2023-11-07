import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("frontierpri.moe.edu.sg A", {
      name: "frontierpri-moe-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bjai528my5b1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("frontierpri.moe.edu.sg AAAA", {
      name: "frontierpri-moe-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bjai528my5b1.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
