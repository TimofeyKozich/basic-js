const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  
  for (let domain of domains) {
    const domainArray = domain.split(".");

    let resultKey = "";
    for (let i = domainArray.length - 1; i >= 0; i -= 1) {
      resultKey += `.${domainArray[i]}`
      
      if (resultKey in result) {
        result[resultKey] += 1;
      } else {
        result[resultKey] = 1;
      }

    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
