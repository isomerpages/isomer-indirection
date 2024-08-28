import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("talentdev.gri.nhg.com.sg A", {
      name: "talentdev-gri-nhg-com-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2p1j6yhl69j1g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("talentdev.gri.nhg.com.sg AAAA", {
      name: "talentdev-gri-nhg-com-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d2p1j6yhl69j1g.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
