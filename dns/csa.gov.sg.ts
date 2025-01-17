import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";
export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.csa.gov.sg A", {
      name: "csa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dg3bna7r99uuk.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
    new Record("www.csa.gov.sg AAAA", {
      name: "csa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dg3bna7r99uuk.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];
  return records;
};
