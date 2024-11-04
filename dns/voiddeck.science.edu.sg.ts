import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("voiddeck.science.edu.sg A", {
      name: "voiddeck-science-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fjc9v2aq1pbi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("voiddeck.science.edu.sg AAAA", {
      name: "voiddeck-science-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1fjc9v2aq1pbi.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
