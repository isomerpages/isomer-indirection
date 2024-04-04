import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("testalternativedomain.isomer.gov.sg A", {
      name: "testalternativedomain-isomer-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1w6f587euna5z.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("testalternativedomain.isomer.gov.sg AAAA", {
      name: "testalternativedomain-isomer-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1w6f587euna5z.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
