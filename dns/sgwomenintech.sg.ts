import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sgwomenintech.sg A", {
      name: "sgwomenintech-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxk58lybofc5i.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sgwomenintech.sg AAAA", {
      name: "sgwomenintech-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxk58lybofc5i.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
