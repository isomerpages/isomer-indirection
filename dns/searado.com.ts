import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("searado.com A", {
      name: "searado-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ybtgbdo21hz7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("searado.com AAAA", {
      name: "searado-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2ybtgbdo21hz7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
