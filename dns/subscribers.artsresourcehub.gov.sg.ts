import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("subscribers.artsresourcehub.gov.sg A", {
      name: "subscribers-artsresourcehub-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d22xtvlq9hdirg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("subscribers.artsresourcehub.gov.sg AAAA", {
      name: "subscribers-artsresourcehub-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d22xtvlq9hdirg.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
