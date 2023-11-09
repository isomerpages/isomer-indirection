import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("ncada.org.sg A", {
      name: "ncada-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d38t8yq0owyc00.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("ncada.org.sg AAAA", {
      name: "ncada-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d38t8yq0owyc00.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
