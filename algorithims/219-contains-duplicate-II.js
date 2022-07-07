//Leetcode Solution
//Sliding Window
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  let map = new Map()

  for (const [i, e] of nums.entries()) {
    if (i - map.get(e) <= k) return true
    map.set(e, i)
  }
  return false
}

module.exports = containsNearbyDuplicate
