import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("vapt-ndp.isomer.gov.sg A", {
      name: "vapt-ndp-isomer-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3f3orm7g7yzaf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("vapt-ndp.isomer.gov.sg AAAA", {
      name: "vapt-ndp-isomer-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3f3orm7g7yzaf.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
