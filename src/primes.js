const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (number) => {
    // special situation I have to account for, since 2 is the only even number that is prime
    if (number === 2) {
        console.log('Prime');
        return
    }

    // check if a number is prime
    for (let i = 2; i < number.length; i++) {
        let divided = number / i
        if (Math.floor(divided) === divided) { // a stupid way to check if a number is an integer
            console.log('Not a prime');

            readline.close();
            return
        }
    }

    // if the previous instruction does not exit, the number is prime
    console.log('Prime')

    readline.close();
});