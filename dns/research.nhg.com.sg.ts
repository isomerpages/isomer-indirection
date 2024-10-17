import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("research.nhg.com.sg A", {
      name: "research-nhg-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15tw7cvh8vbp2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("research.nhg.com.sg AAAA", {
      name: "research-nhg-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d15tw7cvh8vbp2.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
