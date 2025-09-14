const args = process.argv.slice(2);
const n = args.length;

if (n === 0) {
  console.log('0 argument');
} else if (n === 1) {
  console.log('1 argument');
} else {
  console.log(`${n} arguments`);
}

