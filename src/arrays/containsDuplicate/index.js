/*Given an integer array of numbers, return true if any value
appears at least twice in the array, and return false if every
element is distinct*/

const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length
}
module.exports = {
  containsDuplicate
};