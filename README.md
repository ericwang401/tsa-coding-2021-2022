<h1 align="center">High School Coding Competition For <a href="https://oktsa.org">OKTSA</a> 2021-2022 State Leadership Conference</h1>

> 😋 This is an example submission that was actually created during the conference

## Project Tech Stack

* Node.JS - Serverside Javascript Runtime (The project is coded in Javascript)
* Docker - Enterprise containerization platform (The development environment was set up using Docker containers)

## Structure

**All source code is under the `src` folder**

* numbers.js - convert each digit to the English word
* pangram.js - check if an input uses at least 1 of each letter in the English alphabet
⋅⋅⋅ If the input uses at least 1 of each letter, print the duplicate letters

⋅⋅⋅ If the input doesn't use at least 1 of each letter, print the missing letters
* primes.js - check if a number is a prime number <a href="https://www.techtarget.com/whatis/definition/prime-number#:~:text=A%20prime%20number%20is%20a,factors%20are%20called%20composite%20numbers.">(what is a prime number?)</a>
* timeCalculator.js - for the first input you give HH:MM AM/PM, then for the second input you input how much you want to add/subtract on the first input you added (ex: +03:00 - add 3 hours, -04:20 - minus 4 hours and 20 minutes)
* unitConversions.js - oh boy, this is hard to explain because it was the last prompt and the hardest to implement.
⋅⋅⋅ we have US imperial units (volume and weight) that we want to convert to metric
⋅⋅⋅ basically we have to convert different types of units, see the instructions below to kinda see how it works
⋅⋅⋅ I really can't explain this, sorry

## How do I use this

If you have not already installed Docker, please install it from [Docker.com](https://docker.com)

1. Run `docker-compose up -d workspace` in the project root `tsa-coding`
2. Run `docker-compose exec workspace bash` in the project root to access the development environment
3. Change the directory to `/src` by executing `cd src`


Now that you are able to run the code, here's some example demonstrations you can run

### numbers.js

1. Run `node numbers.js`
2. Input any number (e.g. 420)
3. It will tell you each digit in the English word equivalent (e.g. Four Two Zero)

### pangram.js

1. Run `node pangram.js`
2. Input any phrase or sentence (e.g. Team Fourty Four is the best team ever!)
3. It will tell you if it is a pangram or not
* If it is, it will tell you the duplicate letters
* If it isn't, it will give you the missing letters that it needs to be a pangram

### primes.js

1. Run `node primes.js`
2. Input any number (e.g. 69420)
3. It will tell you if it's prime or not
4. ???
5. profit

### timeCalculator.js

1. Run `node timeCalculator.js`
2. Input an initial time (e.g. 04:20 PM) and press enter
3. Input the value you want to modify the time by (e.g. +02:20 or -11:43) and press enter
4. It will tell you what the final time would be after doing the operation

### unitConversions.js

1. Run `node unitConversions.js`
2. Input a value like `4 tbsp vanilla extract x2`
3. It will convert 4 tbsp to metric (mL) and multiply it by `2`
4. Output should be like `120 mL vanilla extract`

## Author

👤 **Eric Wang**

* Website: https://performave.com
* Questions (Discord.com): `Eric Wang#9468`
* Instagram: `eric.wang401`
* Github: [@ericwang401](https://github.com/ericwang401)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ericwang401/tsa-coding-2021-2022/issues).

## Show your support

Give a ⭐️ if this app helped you!

Please donate to [my Patreon](https://www.patreon.com/performave) to help let me keep working on these amazing open-source projects!

## 📝 License

Copyright © 2022 [Eric Wang](https://github.com/ericwang401).<br />
This project is [MIT](https://github.com/ericwang401/tsa-coding-2021-2022/blob/main/LICENSE) licensed.
