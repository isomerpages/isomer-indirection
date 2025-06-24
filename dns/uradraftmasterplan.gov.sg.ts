import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("uradraftmasterplan.gov.sg A", {
      name: "uradraftmasterplan-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1ozawj89b2jck.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("uradraftmasterplan.gov.sg AAAA", {
      name: "uradraftmasterplan-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1ozawj89b2jck.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
