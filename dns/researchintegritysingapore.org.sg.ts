import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("researchintegritysingapore.org.sg A", {
      name: "researchintegritysingapore-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dv3pzq5fbq7ks.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("researchintegritysingapore.org.sg AAAA", {
      name: "researchintegritysingapore-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dv3pzq5fbq7ks.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
