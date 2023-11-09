import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("harmonyindiversitygallery.gov.sg A", {
      name: "harmonyindiversitygallery-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39g1etd7r28lw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("harmonyindiversitygallery.gov.sg AAAA", {
      name: "harmonyindiversitygallery-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d39g1etd7r28lw.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
