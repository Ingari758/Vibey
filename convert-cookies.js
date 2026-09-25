/**
 * Konvertiert eine Netscape-Cookie-Datei (z.B. von "Get cookies.txt LOCALLY")
 * in einen einzelnen Cookie-Header-String für YTM_COOKIE in der .env
 *
 * Nutzung:
 *   node convert-cookies.js /pfad/zu/cookies.txt
 *
 * Das Ergebnis wird in cookie-output.txt geschrieben.
 * Öffne die Datei, kopiere den Inhalt in YTM_COOKIE=... in deiner .env
 */

const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];

if (!inputPath) {
  console.error('Bitte Pfad zur cookies.txt angeben:');
  console.error('  node convert-cookies.js /pfad/zu/cookies.txt');
  process.exit(1);
}

const raw = fs.readFileSync(inputPath, 'utf-8');
const lines = raw.split('\n');

const pairs = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;

  const cols = trimmed.split('\t');
  if (cols.length < 7) continue;

  const name = cols[5];
  const value = cols[6];

  if (name && value !== undefined) {
    pairs.push(`${name}=${value}`);
  }
}

const cookieString = pairs.join('; ');

const outputPath = path.join(process.cwd(), 'cookie-output.txt');
fs.writeFileSync(outputPath, cookieString, 'utf-8');

console.log(`Fertig. ${pairs.length} Cookies verarbeitet.`);
console.log(`Ergebnis geschrieben nach: ${outputPath}`);
console.log('Öffne die Datei und kopiere den Inhalt in deine .env als YTM_COOKIE=...');
