import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ssi.gov.sg A", {
      name: "ssi-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1towfwzph7peq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ssi.gov.sg AAAA", {
      name: "ssi-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1towfwzph7peq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
