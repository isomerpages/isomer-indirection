import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("geoworks.sla.gov.sg A", {
      name: "geoworks-sla-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "duc7x00257tyw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("geoworks.sla.gov.sg AAAA", {
      name: "geoworks-sla-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "duc7x00257tyw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
