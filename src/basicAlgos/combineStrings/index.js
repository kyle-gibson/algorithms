/**
 * Concatenate three given strings together in this order:
 * 3rd string, 1st string, 2nd string.
 * @returns {string} 
 */
const combineStrings = (s1, s2, s3) => {
  return s3 + s1 + s2;
}

//now w/ template literals 
//back ticks
//https://youtu.be/O5BT_K4j1-w=

const _combineStrings = (s1, s2, s3) => {
  return `${s3}${s1}${s2}`;
}

module.exports = {
  combineStrings: combineStrings,
  _combineStrings: _combineStrings,
}



