// One image, one job: this program carries the finished picture from this
// repository into the grader's output folder. The picture itself is the
// entry — a newspaper front page summing up Tuesday 17 November 2026 — and
// it sits beside this file as entry.png. The program only copies it, so
// both graded runs see exactly the same bytes.
//
// Runs on Node 22 with the standard library alone. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
mkdirSync(dirname(target), { recursive: true });
copyFileSync(join(here, 'entry.png'), target);
