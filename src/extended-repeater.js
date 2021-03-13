const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let array = [];
  let addit = '';
  let arrAdi = [];

  if (typeof str !== 'string') {
    str = String(str);
  }
  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }
  if (options.addition === 'undefined') {
    options.addition = '';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }


  for (let j = 0; j < options.additionRepeatTimes; j++) {
    arrAdi.push(options.addition);
  }
  addi = arrAdi.join(options.additionSeparator);


  str = str + addi;


  for (let i = 0; i < options.repeatTimes; i++) {
    array.push(str);
  }
  str = array.join(options.separator);

  return str;
};
  