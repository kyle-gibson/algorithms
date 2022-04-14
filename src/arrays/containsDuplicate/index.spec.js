const { containsDuplicate } = require('.');

const arr1 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
const expected1 = true;

const arr2 = [-5, -3, -2, -10];
const expected2 = false;

const testCases = [
  {
    args: arr1,
    expected: expected1,
  },
  {
    args: arr2,
    expected: expected2
  }

];

describe('containsDuplicate', () => {
  testCases.forEach((testCase, i) => {
    const {
      args,
      expected,
    } = testCase;

    describe(`test case ${i}`, () => {
      it(`should return ${expected}`, () => {
        expect(countEvenNegatives(args)).toEqual(expected);
      })
    })
  })
});
