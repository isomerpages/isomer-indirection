import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("acice-asean.org A", {
      name: "acice-asean-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2bfdmnpk9rel7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("acice-asean.org AAAA", {
      name: "acice-asean-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2bfdmnpk9rel7.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
