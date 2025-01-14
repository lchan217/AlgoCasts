// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// //SOLUTION 1
// function capitalize(str) {
//  // let words = str.split(' ')
//  let result = []
//
//   for (let word of str.split(' ')){
//       let first = word[0].toUpperCase() // first letter
//       let remaining = word.slice(1) // everything but the first letter
//       result.push(first + remaining)
//   }
//  return result.join(' ')
// }

//SOLUTION 2
function capitalize(str){
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === ' '){
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}



module.exports = capitalize;
