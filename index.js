/* // Common JS
const {generateRandomNumber, celciusToFahrenheit} = require('./utils')

console.log(`Random number: ${generateRandomNumber()}`)

console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(25)}`) */

// ES6

import getPosts, {getPostsLength} from './postController.js'
// import getPosts from './postController.js'

console.log(getPosts())
console.log(`Post lengths ${getPostsLength()}`)

