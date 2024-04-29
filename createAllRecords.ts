import * as fs from "fs";
import * as path from "path";

export async function createAllRecords() {
  const AWS_HOSTED_ZONE_ID = process.env.AWS_HOSTED_ZONE_ID;
  if (!AWS_HOSTED_ZONE_ID) {
    throw new Error("AWS_HOSTED_ZONE_ID must be set");
  }
  const DNS_DIR = "./dns";
  const files = fs.readdirSync(DNS_DIR);
  const promises = files.map(async (file) => {
    const modulePath = path.join(DNS_DIR, file);
    const { createRecords } = await import(`./${modulePath}`);
    createRecords(AWS_HOSTED_ZONE_ID);
  });

  await Promise.all(promises);
}
