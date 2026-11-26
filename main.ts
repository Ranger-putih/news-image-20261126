// news-image-20261126 — "The World in One Day", Thursday 26 November 2026.
// Node 22 entrypoint for the make.fun bounty. The finished newspaper image
// lives in this repo as entry.png; this program just places a copy of it at
// /output/entry.png. It touches no network, reads no clock and rolls no
// dice, so both grading runs write identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "entry.png");
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
