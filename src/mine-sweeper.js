const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j += 1) {

      if (matrix[i][j]) {
        result[i].push(1);
      } else {
        let sum = 0;

        let k = i === 0 ? i : i - 1;
        for ( ; k <= i + 1 && k < matrix.length; k += 1) {
          
          let f = j === 0 ? j : j - 1;
          for ( ; f <= j + 1 && f < matrix[i].length; f += 1) {

            if (matrix[k][f]) {
              sum += 1;
            }
          }
        }

        result[i].push(sum);
      }

    }
  }

  return result;
}

module.exports = {
  minesweeper
};
