import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("knowledgehub.clc.gov.sg A", {
      name: "knowledgehub-clc-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2zj7fpbpzs8nq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("knowledgehub.clc.gov.sg AAAA", {
      name: "knowledgehub-clc-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2zj7fpbpzs8nq.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
