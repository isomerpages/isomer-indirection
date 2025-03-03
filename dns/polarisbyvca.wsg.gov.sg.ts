import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("polarisbyvca.wsg.gov.sg A", {
      name: "polarisbyvca-wsg-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d23jl4uyorybp3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("polarisbyvca.wsg.gov.sg AAAA", {
      name: "polarisbyvca-wsg-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d23jl4uyorybp3.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
