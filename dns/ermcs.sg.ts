import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ermcs.sg A", {
      name: "ermcs-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3cdjhys4upxi2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ermcs.sg AAAA", {
      name: "ermcs-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3cdjhys4upxi2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
