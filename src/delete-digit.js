const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringN = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < stringN.length; i += 1) {
    let cuttingStringN = "";
    if (i === 0) {
      cuttingStringN = stringN.substring(i + 1);
    } else if (i === stringN.length - 1) {
      cuttingStringN = stringN.substring(0, stringN.length - 1);
    } else {
      cuttingStringN = stringN.substring(0, i) + stringN.substring(i + 1);
    }

    maxNumber = +cuttingStringN > maxNumber ? +cuttingStringN : maxNumber;
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
