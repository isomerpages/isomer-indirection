import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("singaporeairshowlive.gov.sg A", {
      name: "singaporeairshowlive-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d360h6sufmaw9q.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("singaporeairshowlive.gov.sg AAAA", {
      name: "singaporeairshowlive-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d360h6sufmaw9q.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
