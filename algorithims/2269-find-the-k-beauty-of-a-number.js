/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = function (num, k) {
  const stringNum = num.toString()
  let count = 0

  for (let i = 0; i <= stringNum.length - k; i++) {
    let subString = parseInt(stringNum.slice(i, k + i))
    console.log(stringNum.slice(i, k + i))
    if (num % subString === 0) count += 1
  }
  return count
}

module.exports = divisorSubstrings
