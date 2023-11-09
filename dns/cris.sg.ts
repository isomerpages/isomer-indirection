import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("cris.sg A", {
      name: "cris-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dsyp7gzg1ozaz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("cris.sg AAAA", {
      name: "cris-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dsyp7gzg1ozaz.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
