import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("www.acice-asean.org A", {
      name: "www-acice-asean-org",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d27esutqhuh0fb.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("www.acice-asean.org AAAA", {
      name: "www-acice-asean-org",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d27esutqhuh0fb.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
