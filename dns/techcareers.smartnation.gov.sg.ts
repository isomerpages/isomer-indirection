import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("techcareers.smartnation.gov.sg A", {
      name: "techcareers-smartnation-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2022u808auw7a.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("techcareers.smartnation.gov.sg AAAA", {
      name: "techcareers-smartnation-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2022u808auw7a.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
