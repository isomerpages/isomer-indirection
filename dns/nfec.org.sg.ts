import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("nfec.org.sg A", {
      name: "nfec-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dtjywlyr0qc1w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("nfec.org.sg AAAA", {
      name: "nfec-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dtjywlyr0qc1w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
