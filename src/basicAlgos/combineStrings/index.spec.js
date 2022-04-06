const { combineStrings, _combineStrings } = require('.');

const strings1 = ['tony', 'tiger', 'red']
const expected1 = 'redtonytiger'

const strings2 = ['flash', 'light', 'mega']
const expected2 = 'megaflashlight'

const strings3 = ['-', 'shaman', 'elemental']
const expected3 = 'elemental-shaman'

const testCases = [
  {
    args: strings1,
    expected: expected1,
  },
  {
    args: strings2,
    expected: expected2
  },
  {
    args: strings3,
    expected: expected3
  }

];

describe('combine strings', () => {
  testCases.forEach((testCase, i) => {
    const {
      args,
      expected,
    } = testCase;

    describe(`test case ${i}`, () => {
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(combineStrings(...args)).toEqual(expected);
      })
      it(`${args.join(", ")} should return ${expected}`, () => {
        expect(_combineStrings(...args)).toEqual(expected);
      })
    })
  })
});