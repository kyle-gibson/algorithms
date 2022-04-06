/**
 * Counts how many numbers are both even and negative.
 * - Time: O(n). (o of n) (big O notation)
 * - Space: O(1). (o of 1) (constant space)
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums = []) {
  let totalEvenNegatives = 0
  for (const num of nums) {
    //modular arithmetic (a % b returns remainder when a is divided by b)
    //% = mod, anytime we see %, divisible, remainder, even, odd
    if (num % 2 === 0 && num < 0) {
      totalEvenNegatives++
      /*how many times can this (line 14) be called?
         a: at most, nums.length (the total count of numbers in nums)
         b: for arr2: it ran twice (but could never have run more than 4 times)
      */
    }
  }
  return totalEvenNegatives
}

module.exports = {
  countEvenNegatives
};