import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const siteDir = resolve('site');
const appEntry = resolve(siteDir, 'app.html');
const indexEntry = resolve(siteDir, 'index.html');

if (!existsSync(appEntry)) {
  throw new Error(`Expected build output at ${appEntry}`);
}

copyFileSync(appEntry, indexEntry);
