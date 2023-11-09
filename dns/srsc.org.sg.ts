import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("srsc.org.sg A", {
      name: "srsc-org-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3vnlsv0beghnu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("srsc.org.sg AAAA", {
      name: "srsc-org-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3vnlsv0beghnu.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
