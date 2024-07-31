import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("rsaf-agile-inno-digital.defence.gov.sg A", {
      name: "rsaf-agile-inno-digital-defence-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2lhnlcdm81xnu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("rsaf-agile-inno-digital.defence.gov.sg AAAA", {
      name: "rsaf-agile-inno-digital-defence-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2lhnlcdm81xnu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
