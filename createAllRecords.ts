import * as fs from "fs";
import * as path from "path";
import { env } from "process";

export async function createAllRecords() {
  const CLOUDFLARE_ZONE_ID = env.CLOUDFLARE_ZONE_ID;
  if (!CLOUDFLARE_ZONE_ID) {
    throw new Error("CLOUDFLARE_ZONE_ID must be set");
  }
  const DNS_DIR = "./dns";
  const files = fs.readdirSync(DNS_DIR);
  const promises = files.map(async (file) => {
    const modulePath = path.join(DNS_DIR, file);
    const { createRecords } = await import(`./${modulePath}`);
    createRecords(CLOUDFLARE_ZONE_ID);
  });

  await Promise.all(promises);
}
