import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("sdo.gov.sg A", {
      name: "sdo-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "drxyspbftglfm.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("sdo.gov.sg AAAA", {
      name: "sdo-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "drxyspbftglfm.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};