import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("lkm.org.sg A", {
      name: "lkm-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dp9zmrm86p6y9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("lkm.org.sg AAAA", {
      name: "lkm-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dp9zmrm86p6y9.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
