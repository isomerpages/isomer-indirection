import { Record } from "@pulumi/cloudflare";

// Note: This is needed to establish the chain of trust from the parent
// zone (isomer.gov.sg), so that DNSSEC works
// DO NOT REMOVE, as this WILL break ALL hosted sites
const createRecords = (zoneId: string): Record[] => {
  const records = [
    new Record("hostedon-ns1", {
      name: "hostedon",
      type: "NS",
      ttl: 60,
      zoneId: zoneId,
      proxied: false,
      content: "ns-1053.awsdns-03.org",
      comment: "For indirection layer, DO NOT REMOVE",
    }),

    new Record("hostedon-ns2", {
      name: "hostedon",
      type: "NS",
      ttl: 60,
      zoneId: zoneId,
      proxied: false,
      content: "ns-641.awsdns-16.net",
      comment: "For indirection layer, DO NOT REMOVE",
    }),

    new Record("hostedon-ns3", {
      name: "hostedon",
      type: "NS",
      ttl: 60,
      zoneId: zoneId,
      proxied: false,
      content: "ns-1615.awsdns-09.co.uk",
      comment: "For indirection layer, DO NOT REMOVE",
    }),

    new Record("hostedon-ns4", {
      name: "hostedon",
      type: "NS",
      ttl: 60,
      zoneId: zoneId,
      proxied: false,
      content: "ns-476.awsdns-59.com",
      comment: "For indirection layer, DO NOT REMOVE",
    }),

    new Record("hostedon-ds", {
      name: "hostedon",
      type: "DS",
      ttl: 60,
      zoneId: zoneId,
      proxied: false,
      data: {
        keyTag: 5403,
        algorithm: 13,
        digestType: 2,
        digest:
          "AC93FBD6C960986A64A96F696837F934A5839F8E187A053B5EA50E7BA13E1615",
      },
      comment: "For indirection layer, DO NOT REMOVE",
    }),
  ];

  return records;
};

export async function createCloudflareRecords() {
  const CLOUDFLARE_ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
  if (!CLOUDFLARE_ZONE_ID) {
    throw new Error("CLOUDFLARE_ZONE_ID must be set");
  }

  createRecords(CLOUDFLARE_ZONE_ID);
}
