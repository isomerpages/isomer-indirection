import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ncpc.org.sg A", {
      name: "ncpc-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1wax5xt36fe4f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ncpc.org.sg AAAA", {
      name: "ncpc-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1wax5xt36fe4f.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
