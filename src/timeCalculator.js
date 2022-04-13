const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = require('prompt-sync')()

const standardizeTime = (time) => {
    const [unparsedTime, timeIndicator] = time.split(' ')

    let parsedTime = '0:00'

    // standardize the time to military time
    if (timeIndicator.toLowerCase() === 'am') {
        parsedTime = unparsedTime
    } else if (timeIndicator.toLowerCase() === 'pm') {
        let [hours, minutes] = unparsedTime.split(':')

        hours = parseInt(hours) + 12

        parsedTime = `${hours}:${minutes}`
    }

    return parsedTime
}

// convert time stamp to minutes
const convertTimeToMinutes = (time) => {
    const [hours, minutes] = time.split(':')

    return parseInt(hours) * 60 + parseInt(minutes)
}

const addExtraZeroToHours = (hours) => {
    if (hours.toString().length === 1) {
        return `0${hours}`
    }

    return hours
}

readline.question('', (time) => {

    const parsedTime = convertTimeToMinutes(standardizeTime(time))


    // now we need to know how much the user wants to add or subtract to the time

    const change = prompt('')

    // get the time operation
    const operation = change.charAt(0)

    const changeInMinutes = convertTimeToMinutes(change.substring(1))

    let resultInMinutes = 0

    if (operation === '+') {
        let result = parsedTime + changeInMinutes

        if (result > 1440) {
            resultInMinutes = result - 1440
        } else {
            resultInMinutes = result
        }
    } else if (operation === '-') {
        let result = parsedTime - changeInMinutes

        if (result < 0) {
            resultInMinutes = 1440 + result
        } else {
            resultInMinutes = result
        }
    }

    // convert minutes to AM pm
    const resultHours = Math.floor(resultInMinutes / 60)
    const resultMinutes = resultInMinutes % 60


    // convert to AM/PM and print
    if (resultHours > 12) {
        let resultHoursAMPM = addExtraZeroToHours(resultHours - 12)
        console.log(`${resultHoursAMPM}:${resultMinutes} PM`)
    } else if (resultHours === 12) {
        let resultHoursAMPM = addExtraZeroToHours(resultHours)
        console.log(`${resultHoursAMPM}:${resultMinutes} PM`)
    } else if (resultHours === 0) {
        let resultHoursAMPM = 12
        console.log(`${resultHoursAMPM}:${resultMinutes} AM`)
    } else {
        let resultHoursAMPM = addExtraZeroToHours(resultHours)
        console.log(`${resultHoursAMPM}:${resultMinutes} AM`)
    }
});