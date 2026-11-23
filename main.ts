// Office Jokes entry for make.fun: one single-line joke about office life.
// The program writes the joke to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I wrote 'per my last email' so confidently that I forgot there never was a first email.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...JOKE].length;

// Gate: 1-199 characters, a single line, not only whitespace.
if (chars < 1 || chars > 199) {
  console.error(`entry must be 1-199 characters, got ${chars}`);
  process.exit(1);
}
if (/[\n\r\u2028\u2029]/.test(JOKE)) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (JOKE.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, JOKE, "utf8");

// Read it back: the run is only a success if the file on disk is byte-exact.
const written = readFileSync(outFile, "utf8");
if (written !== JOKE) {
  console.error("entry.txt on disk does not match the joke");
  process.exit(1);
}
console.log(`wrote entry.txt (${chars} chars): ${JOKE}`);
