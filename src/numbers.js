const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbersWords = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
}

readline.question('', (name) => {
  const number = name.split('').map(Number);
  const result = number.map(n => numbersWords[n]).join(' ');
  console.log(result);
  readline.close();
})