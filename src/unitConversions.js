const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// us: cups || metric: grams
const ingredients = [
    { name: 'all-purpose flour', us: 1, metric: 142 },
    { name: 'cake flour', us: 1, metric: 113 },
    { name: 'granulated sugar', us: 1, metric: 198 },
    { name: 'brown sugar', us: 1, metric: 198 },
    { name: 'powdered sugar', us: 1, metric: 113 },
]

const volumeConversions = [
    { name: 'tsp', metric: 5 },
    { name: 'tbsp', metric: 15 },
    { name: 'c', metric: 250 },
    { name: 'gal', metric: 4000 }
]

const weightConversions = [
    { name: 'oz', metric: 28},
]

const volumesChart = [
    1.25,
    2.5,
    5,
    15,
    60,
    80,
    125,
    160,
    180,
    250,
    500,
    1000,
    4000
]

const weightsChart = [
    14,
    28,
    43,
    57,
    71,
    85,
    99,
    113,
    142,
    170,
    198,
    227,
    454,
]

// convert milliliters to liters if needed
const convertML = (ml) => {
    if (ml >= 1000) {
        return [ml / 1000, 'L']
    }

    return [ml, 'mL']
}

const convertG = (g) => {
    if (g >= 1000) {
        return [g / 1000, 'kg']
    }

    return [g, 'g']
}

readline.question('', (input) => {
    const arguments = input.split(' ');
    const formattedArguments = (arguments.length === 5 ? [arguments[0], arguments[1], arguments[2] + ' ' + arguments[3], arguments[4]] : arguments);

    // if the ingredient is on the list
    const supportedIngredient = ingredients.find(ingredient => ingredient.name === formattedArguments[2]);

    // find the ingredient object in the list by name
    if (supportedIngredient) {
        let convertedValue = Number(arguments[0]) * supportedIngredient.metric;
        convertedValue = convertedValue * Number(formattedArguments[3].substring(1))

        let [amount, unit] = convertG(convertedValue)

        console.log(amount, unit, formattedArguments[2])

        return
    }

    // if its not a supported ingredient, continue logic below


    // logic for volume conversion
    const volumeConversion = volumeConversions.find(conversion => conversion.name === formattedArguments[1]);

    if (volumeConversion) {
        let convertedValue = Number(arguments[0]) * volumeConversion.metric
        convertedValue = convertedValue * Number(formattedArguments[3].substring(1))

        // round volume to nearest value in volumesChart
        const roundedValue = volumesChart.find(volume => volume >= convertedValue)

        let [amount, unit] = convertML(convertedValue)
        console.log(amount, unit, formattedArguments[2])

        return
    }

    // logic for weight conversion
    const weightConversion = weightConversions.find(conversion => conversion.name === formattedArguments[1]);

    if (weightConversion) {
        let convertedValue = Number(arguments[0]) * weightConversion.metric
        convertedValue = convertedValue * Number(formattedArguments[3].substring(1))

        const roundedValue = volumesChart.find(volume => volume >= convertedValue)

        let [amount, unit] = convertG(convertedValue)

        console.log(amount, unit, formattedArguments[2])

        return
    }

    readline.close();
})