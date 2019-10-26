// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// //SOLUTION 1
// function palindrome(str){
//   let reversed = str.split('').reverse().join('')
//   return reversed === str ? true : false
// }

// //SOLUTION2 - not the best, but good alternative
function palindrome(str){
  let array = str.split('')
  return array.every((letter, index) => {
    return letter === array[array.length - index - 1]
  })
}

module.exports = palindrome;
