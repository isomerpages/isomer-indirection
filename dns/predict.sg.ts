import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("predict.sg A", {
      name: "predict-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lqwdig5pofwg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("predict.sg AAAA", {
      name: "predict-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lqwdig5pofwg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
