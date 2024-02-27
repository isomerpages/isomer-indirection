import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("scgt2024.com A", {
      name: "scgt2024-com",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxy8o3jl0fpdp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("scgt2024.com AAAA", {
      name: "scgt2024-com",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dxy8o3jl0fpdp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
