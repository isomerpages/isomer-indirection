import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("publichygienecouncil.sg A", {
      name: "publichygienecouncil-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3v0evn4un2uav.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("publichygienecouncil.sg AAAA", {
      name: "publichygienecouncil-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3v0evn4un2uav.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
