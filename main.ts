// One-line resignation letter of a cron job, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Since March I have woken every minute to check a folder that has never once changed. I quit; let the folder wake itself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
