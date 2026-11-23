// One Word, First Thought — entry program (harness program/v1).
// Writes exactly one word to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "susurrus" won 24/25 across 12 candidates: a rare Latin word for a
// whispering/rustling sound (wind, water, leaves) — surprising, vivid,
// and its own sibilant s-s-s sound imitates its meaning, so the word
// sounds like what it describes. Unlikely to be duplicated by others.
const WORD = "susurrus";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
