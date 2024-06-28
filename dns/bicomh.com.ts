import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("bicomh.com A", {
      name: "bicomh-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddqqs4ie0mtuu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("bicomh.com AAAA", {
      name: "bicomh-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "ddqqs4ie0mtuu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
