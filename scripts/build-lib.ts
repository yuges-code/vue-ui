// import os from 'os';
import fs from 'fs';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, '../src');
const dest = path.resolve(__dirname, '../lib');

fs.rmSync(dest, { recursive: true, force: true, });

fs.cpSync(src, dest,
    {
        // filter: (source: string, destination: string) => {
        //     return true;
        // },
        recursive: true,
    }
);

console.log('Components copied to lib/');
