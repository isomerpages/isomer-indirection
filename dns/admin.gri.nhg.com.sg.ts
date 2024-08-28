import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("admin.gri.nhg.com.sg A", {
      name: "admin-gri-nhg-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmzgo0dzzpl5v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("admin.gri.nhg.com.sg AAAA", {
      name: "admin-gri-nhg-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmzgo0dzzpl5v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
