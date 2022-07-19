/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = function (s) {
  const length = s.length
  let max = 0
  const niceStrings = new Set()
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const subString = s.slice(i, j + 1)

      if (isNice(subString)) {
        max = Math.max(max, subString.length)
        niceStrings.add(subString)
      }
    }
  }

  for (strings of niceStrings) {
    if (strings.length === max) return strings
  }

  return ''
}

function isNice(n) {
  const upper = new Set()
  const lower = new Set()

  for (letter of n) {
    isUpperCase(letter) ? upper.add(letter) : lower.add(letter)
  }

  for (u of upper) {
    const lowerVersion = u.toLowerCase()
    if (!lower.has(lowerVersion)) return false
  }

  for (l of lower) {
    const upperVersion = l.toUpperCase()
    if (!upper.has(upperVersion)) return false
  }

  return true
}

function isUpperCase(l) {
  return l === l.toUpperCase()
}

module.exports = longestNiceSubstring
