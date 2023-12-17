const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let currentLetter = "";
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] != str[i + 1]) {
      currentLetter += str[i];
      if (currentLetter.length > 1) {
        result += `${currentLetter.length}${currentLetter[0]}`;
        currentLetter = "";
      } else {
        result += `${currentLetter[0]}`;
        currentLetter = "";
      }
    } else {
      currentLetter += str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
