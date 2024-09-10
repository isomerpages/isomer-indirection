import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("startuptalentfactory.np.edu.sg A", {
      name: "startuptalentfactory-np-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1iv5v6qmxd5w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("startuptalentfactory.np.edu.sg AAAA", {
      name: "startuptalentfactory-np-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1iv5v6qmxd5w.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),
  ];

  return records;
};
