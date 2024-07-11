import { Record } from "@pulumi/aws/route53";
import { CLOUDFRONT_HOSTED_ZONE_ID } from "../constants";

export const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("hci.edu.sg A", {
      name: "hci-edu-sg",
      type: "A",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1my63no1r1s2a.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    new Record("hci.edu.sg AAAA", {
      name: "hci-edu-sg",
      type: "AAAA",
      zoneId: zoneId,
      aliases: [
        {
          name: "d1my63no1r1s2a.cloudfront.net",
          zoneId: CLOUDFRONT_HOSTED_ZONE_ID,
          evaluateTargetHealth: false,
        },
      ],
    }),

    // NOTE: The following records are needed by HCI for their OpenCerts issuance verification
    new Record("hci.edu.sg TXT", {
      name: "hci-edu-sg",
      type: "TXT",
      zoneId: zoneId,
      ttl: 3600,
      records: [
        "openatts net=ethereum netId=1 addr=0xDc45D2E1482093E6E8933688347969ba785C39f9",
        "openatts a=dns-did; p=did:ethr:0x0ee7FeE3eC819CC838A162F4a8DA0204Fd5B5dB1#controller; v=1.0",
      ],
    }),
  ];

  return records;
};
