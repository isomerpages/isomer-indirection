import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sxdcolab.nyp.edu.sg A", {
      name: "sxdcolab-nyp-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39v5p5tnx4iyy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sxdcolab.nyp.edu.sg AAAA", {
      name: "sxdcolab-nyp-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39v5p5tnx4iyy.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
