import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("bioethics-singapore.gov.sg A", {
      name: "bioethics-singapore-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2rd2o2pdhnzx8.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("bioethics-singapore.gov.sg AAAA", {
      name: "bioethics-singapore-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2rd2o2pdhnzx8.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
