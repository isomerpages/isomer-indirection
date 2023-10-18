import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("southwest.cdc.gov.sg A", {
      name: "southwest-cdc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3o4s5buf8ez50.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("southwest.cdc.gov.sg AAAA", {
      name: "southwest-cdc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3o4s5buf8ez50.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
