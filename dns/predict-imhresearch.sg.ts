import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("predict-imhresearch.sg A", {
      name: "predict-imhresearch-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3fw3iwtsxqs9k.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("predict-imhresearch.sg AAAA", {
      name: "predict-imhresearch-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3fw3iwtsxqs9k.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
