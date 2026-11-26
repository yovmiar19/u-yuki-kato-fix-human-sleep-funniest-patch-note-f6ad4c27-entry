// Fix Human Sleep: Funniest Patch Note — make.fun one-liner entry.
// The entry is a single patch-note line announcing that human sleep
// has been fixed. The program writes exactly that line to
// /output/entry.txt and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Patch: Fixed bug where your brain replayed an awkward thing you said in 2009 at exactly 3:14 AM. The memory has been moved to cold storage.";

// The gate: one line of 1 to 160 characters. The line is 139 chars:
// a changelog-style fix for the brain replaying an old embarrassment
// at 3:14 AM, with the memory demoted to cold storage.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry must be a single line of 1-160 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
