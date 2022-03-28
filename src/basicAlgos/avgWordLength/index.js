const avgWordLength = (arr) => {
  let totalChar = 0
  for (const word of arr) {
    totalChar += word.length
  }
  return Math.floor (totalChar/arr.length)
}

module.exports = {
  avgWordLength
}