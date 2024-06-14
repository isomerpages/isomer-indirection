import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("alphabotsg.vica.gov.sg A", {
      name: "alphabotsg-vica-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fdop6hwubnbt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("alphabotsg.vica.gov.sg AAAA", {
      name: "alphabotsg-vica-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fdop6hwubnbt.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
