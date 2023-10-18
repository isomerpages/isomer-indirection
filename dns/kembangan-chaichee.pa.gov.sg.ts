import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("kembangan-chaichee.pa.gov.sg A", {
      name: "kembangan-chaichee-pa-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3mc75fp7skrms.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("kembangan-chaichee.pa.gov.sg AAAA", {
      name: "kembangan-chaichee-pa-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d3mc75fp7skrms.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
