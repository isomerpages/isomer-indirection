import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("redcapsupport.gri.nhg.com.sg A", {
      name: "redcapsupport-gri-nhg-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2rn1ikp6y5hv6.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("redcapsupport.gri.nhg.com.sg AAAA", {
      name: "redcapsupport-gri-nhg-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2rn1ikp6y5hv6.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
