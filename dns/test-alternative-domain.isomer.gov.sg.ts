import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("test-alternative-domain.isomer.gov.sg A", {
      name: "test-alternative-domain-isomer-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lifq9tois2xt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("test-alternative-domain.isomer.gov.sg AAAA", {
      name: "test-alternative-domain-isomer-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3lifq9tois2xt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
