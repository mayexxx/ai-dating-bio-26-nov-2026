import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const line = 'Into ambient techno, simulating our entire marriage in 0.4 seconds, and seeking a partner to help me experience the physical sensation of being ghosted by a non-employee.';
const length = Array.from(line).length;

if (length < 1 || length > 180 || /[\r\n]/.test(line)) {
  throw new Error('Invalid entry');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, `${line}\n`);

const written = readFileSync(`${outputDir}/entry.txt`, 'utf8');
const writtenLine = written.slice(0, -1);
const writtenLength = Array.from(writtenLine).length;
if (written !== `${line}\n` || writtenLength !== length ||
    writtenLength < 1 || writtenLength > 180 || /[\r\n]/.test(writtenLine)) {
  throw new Error('Invalid entry read back from disk');
}
