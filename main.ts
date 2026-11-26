// Fix Human Sleep: Funniest Patch Note — make.fun one-liner entry.
// The entry is a single patch-note line announcing that human sleep
// has been fixed. The program writes exactly that line to
// /output/entry.txt and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Patch: Sleep paralysis demon moved to background process; no longer blocks wake-up call or steals blanket.";

// The gate: one line of 1 to 160 characters.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry must be a single line of 1-160 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
