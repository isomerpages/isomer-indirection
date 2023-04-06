import * as fs from "fs";
import * as path from "path";
import { env } from "process";

const CLOUDFLARE_ZONE_ID = env.CLOUDFLARE_ZONE_ID;
if (!CLOUDFLARE_ZONE_ID) {
  throw new Error("CLOUDFLARE_ZONE_ID must be set");
}

const dnsDir = "./dns";
const files = fs.readdirSync(dnsDir);
async function createAllRecords() {
  for (const file of files) {
    // Import the file and call the createRecords function
    const modulePath = path.join(dnsDir, file);
    const { createRecords } = await import(`./${modulePath}`);
    createRecords(CLOUDFLARE_ZONE_ID);
  }
}
createAllRecords();
