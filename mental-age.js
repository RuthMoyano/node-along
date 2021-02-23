const getInput = require("./get-input.js");


const userAge = getInput();
if (userAge === '--help') {
    console.log('This function returns your mental age.');
    console.log('Please enter your age after "node mental-age.js" and a space.');
}
console.log(userAge / 2 + 3);

console.log('You are ' + userAge + ' years old.');

console.log('Your mental age is ' + mentalAge + ' years old.');

