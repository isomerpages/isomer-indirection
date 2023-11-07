import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("child.chi.sg A", {
      name: "child-chi-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmx3mloy5z956.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("child.chi.sg AAAA", {
      name: "child-chi-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "dmx3mloy5z956.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
