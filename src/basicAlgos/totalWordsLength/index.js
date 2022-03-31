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
 * @returns {number} The total length of all the words.
 */
 const _totalWordsLength = (arr) => {
   return arr.join('').length 
 }

module.exports = {
  totalWordsLength: totalWordsLength,
  _totalWordsLength: _totalWordsLength
}