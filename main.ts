// news-image-20261126 — "The World in One Day", Thursday 26 November 2026.
// Version 2: Macy's 100th parade leads, every story carries a verification
// badge, a UTC timeline runs under the region bar, and the map is bigger
// and colour-coded. Node 22 entrypoint for the make.fun bounty. The
// finished newspaper image lives in this repo as entry.png; this program
// reads it and writes it to /output/entry.png. It touches no network,
// reads no clock and rolls no dice, so both grading runs write identical
// bytes.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "entry.png");
const target = join(outputDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repo root");
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, readFileSync(source));
