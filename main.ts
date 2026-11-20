// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The post itself is the entry: the house reads it from X (its first picture
// and its text) and hands that to the judge, so all this program has to do is
// hand POST.json over. Before copying, it checks the file is a JSON object
// with a url string, so a broken POST.json fails loudly here instead of
// passing a bad file to the gate. The copy itself moves the raw bytes, so
// /output/POST.json is byte-identical to the repository's POST.json.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const postPath = join(BOT_DIR, 'POST.json');
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a url string');
  process.exit(1);
}

const url = (post as { url: string }).url;
let parsed: URL;
try {
  parsed = new URL(url);
} catch {
  console.error(`POST.json url must be a real X post address: https://x.com/<handle>/status/<id>`);
  process.exit(1);
}
if (
  parsed.protocol !== 'https:' ||
  (parsed.hostname !== 'x.com' && parsed.hostname !== 'twitter.com') ||
  !/^\/[^/]+\/status\/\d+$/.test(parsed.pathname)
) {
  console.error(`POST.json url must be a real X post address: https://x.com/<handle>/status/<id>`);
  process.exit(1);
}

try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
