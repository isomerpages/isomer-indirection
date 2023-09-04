import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("kainos.defence.gov.sg A", {
      name: "kainos-defence-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "djhbp3dksiw3k.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("kainos.defence.gov.sg AAAA", {
      name: "kainos-defence-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "djhbp3dksiw3k.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
