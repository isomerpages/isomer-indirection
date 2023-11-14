import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("pofmaoffice.gov.sg A", {
      name: "pofmaoffice-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3f1ktv59w8yz7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("pofmaoffice.gov.sg AAAA", {
      name: "pofmaoffice-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3f1ktv59w8yz7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
