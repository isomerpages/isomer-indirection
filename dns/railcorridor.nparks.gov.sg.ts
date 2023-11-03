import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("railcorridor.nparks.gov.sg A", {
      name: "railcorridor-nparks-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3ch3tkbz43v0b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("railcorridor.nparks.gov.sg AAAA", {
      name: "railcorridor-nparks-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3ch3tkbz43v0b.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
