
const raw = process.argv[2];


if (raw === undefined) {
  console.log('argument:');
  process.exit(0);
}


const cleaned = String(raw).replace(/^['"]|['"]$/g, '');


const n = parseInt(cleaned, 10);

if (isNaN(n)) {
  console.log('Not a number');
} else {
  console.log('argument: ' + n);
}
