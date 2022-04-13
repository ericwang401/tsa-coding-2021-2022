const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// check if a string is a pangram
const isPangram = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = string.toLowerCase().split('');
    return alphabet.split('').every(letter => letters.includes(letter));
}

// check which letters of the alphabet is missing from a string
const missingLetters = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = string.toLowerCase().split('');
    console.log(letters)
    return alphabet.split('').filter(letter => !letters.includes(letter));
}

// alphabetize a string
const alphabetize = (string) => {
    const letters = string.toLowerCase().split('');
    return letters.sort().join(' ');
}

// remove duplicates in an array
const removeDuplicates = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
}

// check for duplicate letters in a string
const checkDuplicates = (string) => {
    const letters = string.toLowerCase().split('');
    const duplicates = letters.filter((letter, index) => letters.indexOf(letter) !== index);
    const sanitizedResults = duplicates.filter(letter => letter !== ' ');
    return sanitizedResults;
}

readline.question('', (name) => {
    const result = isPangram(name)
    console.log(result ? 'Pangram' : 'Not a pangram');

    if (result) {
        console.log(alphabetize(removeDuplicates(checkDuplicates(name)).join('')))
    } else {
        console.log(alphabetize(removeDuplicates(missingLetters(name)).join('')))
    }
    readline.close();
})
