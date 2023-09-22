import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("dtcareers.gov.sg A", {
      name: "dtcareers-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "de7ru7f3wcykf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("dtcareers.gov.sg AAAA", {
      name: "dtcareers-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "de7ru7f3wcykf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
