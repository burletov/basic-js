const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayOne) {
  if (typeof arrayOne !== "object") throw Error;
  let arrayTwo = [];
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i + 1] === "--discard-prev" || arrayOne[i] === "--discard-prev") {
    } else if (arrayOne[i] === "--discard-next") i++;
    else if (arrayOne[i] === "--double-next") {
      if (arrayOne[i + 1] !== undefined) arrayTwo.push(arrayOne[i + 1]);
    } else if (arrayOne[i] === "--double-prev") {
      if (arrayOne[i - 2] === "--discard-next") {
      } else if (arrayOne[i - 1] !== undefined) arrayTwo.push(arrayOne[i - 1]);
    } else arrayTwo.push(arrayOne[i]);
  }
  return arrayTwo;
};
