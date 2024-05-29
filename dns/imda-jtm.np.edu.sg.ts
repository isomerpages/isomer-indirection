import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("imda-jtm.np.edu.sg A", {
      name: "imda-jtm-np-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d35di7rqgnq7tj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("imda-jtm.np.edu.sg AAAA", {
      name: "imda-jtm-np-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d35di7rqgnq7tj.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
