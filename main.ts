// news-image-20261126 v4 — "The World in One Day", Thursday 26 November 2026.
// Surgical revision of v3: panel 12 is now the Niger State reprisal attack
// (30 killed, police-confirmed 26 Nov) and ALSO ON gains Russia's record
// $609bn war budget. Everything else on the page is v3 untouched.
// Node 22 entrypoint for the make.fun bounty. The finished front page lives
// in this repo as entry.png; this program copies it to /output/entry.png.
// It reads no network, no clock and no randomness, so both grading runs
// write identical bytes.
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
