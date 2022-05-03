/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
const findLongestWord = (arr) => {
  let longestWord = ''
  for (const word of arr) {
    if (word.length >= longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}

findLongestWord("there are words in this string")

module.exports = { findLongestWord }