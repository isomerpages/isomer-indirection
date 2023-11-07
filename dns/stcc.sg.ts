import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("stcc.sg A", {
      name: "stcc-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15xwxc98xb2b2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("stcc.sg AAAA", {
      name: "stcc-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15xwxc98xb2b2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
