// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1
// function reverse(str) {
//   return str.split('').reverse().join('')
//   // turn array into string, reverse it, then join string again
// }

// // SOLUTION 2**
// // don't use traditional for loop because of typo opportunities
function reverse(str) {
  let reversed = ''
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

// SOLUTION 3 ~2 min
// function reverse(str){
//   let array = str.split('')
//   return array.reduce((reversed, character) => {
//     return character + reversed
//   }, '')
// }

//reverse('asdf')

module.exports = reverse;
