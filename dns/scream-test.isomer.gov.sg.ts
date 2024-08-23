import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("scream-test.isomer.gov.sg A", {
      name: "scream-test-isomer-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39y8n8kizyjwc.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("scream-test.isomer.gov.sg AAAA", {
      name: "scream-test-isomer-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39y8n8kizyjwc.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
