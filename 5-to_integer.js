#!/usr/bin/node

const raw = process.argv[2];

if (raw === undefined) {
  // no argument provided
  console.log('argument:');
  process.exit(0);
}

// detect quoted forms (straight or common curly quotes)
const first = raw[0];
const last = raw[raw.length - 1];
const isQuoted = (
  (first === "'" && last === "'") ||
  (first === '"' && last === '"') ||
  (first === '‘' && last === '’') ||
  (first === '“' && last === '”')
);

if (isQuoted) {
  // preserve the quotes exactly as provided
  console.log('argument: ' + raw);
} else {
  // try to convert to number (accept floats, then use integer part)
  const n = parseFloat(raw);
  if (Number.isNaN(n)) {
    console.log('Not a number');
  } else {
    console.log('argument: ' + parseInt(n, 10));
  }
}
