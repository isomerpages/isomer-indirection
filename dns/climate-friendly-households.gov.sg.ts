import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("climate-friendly-households.gov.sg A", {
      name: "climate-friendly-households-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dd79wze4sz0jq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("climate-friendly-households.gov.sg AAAA", {
      name: "climate-friendly-households-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dd79wze4sz0jq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
