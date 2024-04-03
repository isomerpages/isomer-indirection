import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("preciseihcc-conference.sg A", {
      name: "preciseihcc-conference-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d33jb1gaxkrrjv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("preciseihcc-conference.sg AAAA", {
      name: "preciseihcc-conference-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d33jb1gaxkrrjv.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
