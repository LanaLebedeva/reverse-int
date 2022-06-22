module.exports = function reverse (n) {
  if (n < 0) {
      n *= (-1);
  }
  let result = '';
  let numberString = n.toString();
  for (let char of numberString) {
      result = char + result
  }
  return parseInt(result);
}
