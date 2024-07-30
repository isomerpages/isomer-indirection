import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("spom.com.sg A", {
      name: "spom-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddtmc4ic58sr9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("spom.com.sg AAAA", {
      name: "spom-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddtmc4ic58sr9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
