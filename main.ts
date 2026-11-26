import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We're going to ride six floors in total silence, and neither of us will ever speak of this again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
