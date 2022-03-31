/**
 * Determines the total of the lengths of the words in the given array.
 * @returns {number} The total length of all the words.
 */
 const totalWordsLength = (arr) => {
   let totalLetters = 0
   for (const word of arr) {
     totalLetters += word.length          
   }
   return totalLetters
 }

 /**
 * Determines the total of the lengths of the words in the given array.
 * (using a different method than the above function)
 *
 * Used .join('') on the array because it turned the array into a string
 * containing all of the elements of the array, which then allowed me to 
 * access the length, which is a built-in attribute of strings.
 * Had to use an empty string as a .join('') argument, because otherwise
 * it would default to a ,. Which increased the total letter count
 * leading to a failed npm test.
 * 
 * @returns {number} The total length of all the words.
 */
 const _totalWordsLength = (arr) => {
   return arr.join('').length 
 }

module.exports = {
  totalWordsLength: totalWordsLength,
  _totalWordsLength: _totalWordsLength
}