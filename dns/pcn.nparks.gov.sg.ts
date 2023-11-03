import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("pcn.nparks.gov.sg A", {
      name: "pcn-nparks-gov-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1mpnktdoekhnp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("pcn.nparks.gov.sg AAAA", {
      name: "pcn-nparks-gov-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1mpnktdoekhnp.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
