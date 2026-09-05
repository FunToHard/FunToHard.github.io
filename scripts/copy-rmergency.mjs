import fs from 'node:fs';
import path from 'node:path';

const srcDir = path.resolve('R-mergency/dist');
const destDir = path.resolve('dist/r-mergency');

if (fs.existsSync(srcDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.cpSync(srcDir, destDir, { recursive: true });
  console.log('[R-mergency] Successfully copied submodule build to dist/r-mergency/');
} else {
  console.warn('[R-mergency] Warning: R-mergency/dist does not exist, skipping static copy.');
}
