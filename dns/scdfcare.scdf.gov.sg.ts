import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("scdfcare.scdf.gov.sg A", {
      name: "scdfcare-scdf-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1mup1skyxomep.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("scdfcare.scdf.gov.sg AAAA", {
      name: "scdfcare-scdf-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1mup1skyxomep.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
