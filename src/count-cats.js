const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map(el => el.filter(el => el === '^^')).reduce((sum, el) => sum + el.length, 0)
};
