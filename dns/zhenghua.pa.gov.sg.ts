import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("zhenghua.pa.gov.sg A", {
      name: "zhenghua-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bhgzrwtx7p1g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("zhenghua.pa.gov.sg AAAA", {
      name: "zhenghua-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1bhgzrwtx7p1g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
