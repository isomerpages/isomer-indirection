import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("abnconf2025.bioethics-singapore.gov.sg A", {
      name: "abnconf2025-bioethics-singapore-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3cqazwk9kd82v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("abnconf2025.bioethics-singapore.gov.sg AAAA", {
      name: "abnconf2025-bioethics-singapore-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3cqazwk9kd82v.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
