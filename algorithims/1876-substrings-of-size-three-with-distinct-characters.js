/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function (s) {
  const stringArr = s.split('')
  let count = 0

  for (let i = 0; i <= s.length - 3; i++) {
    let subString = stringArr.slice(i, i + 3)
    let set = new Set(subString)

    if (set.size === 3) count += 1
  }
  return count
}

module.exports = countGoodSubstrings
