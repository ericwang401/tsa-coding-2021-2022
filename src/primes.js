const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', (number) => {
    // edge case, since 2 is the only even number that is prime
    if (number === 2) {
        console.log('Prime');
        return
    }

    // check if a number is prime
    for (let i = 2; i < number.length; i++) {
        let divided = number / i
        if (Math.floor(divided) === divided) {
            console.log('Not a prime');
            return
        }
    }

    // if the previous instruction does not exit, the number is prime
    console.log('Prime')
});