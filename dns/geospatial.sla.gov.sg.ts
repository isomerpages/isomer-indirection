import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("geospatial.sla.gov.sg A", {
      name: "geospatial-sla-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dhcylf3pfbhyq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("geospatial.sla.gov.sg AAAA", {
      name: "geospatial-sla-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dhcylf3pfbhyq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
