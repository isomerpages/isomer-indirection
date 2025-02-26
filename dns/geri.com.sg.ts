import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.geri.com.sg A", {
      name: "geri-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2kdsrjvzry1ct.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("www.geri.com.sg AAAA", {
      name: "geri-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2kdsrjvzry1ct.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
