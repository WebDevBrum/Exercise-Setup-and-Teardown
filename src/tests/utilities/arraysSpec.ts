import arrays from '../../utilities/arrays'

describe("Array utilty tests", () => {

  const numArr = [3, 4, 5, 6];
  const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

  describe("addArr adds numbers in an array", () => {
    it('should add numbers in array and be truthy', () => {
      expect(arrays.addArr(numArr)).toBeTruthy();
    });
    it('should add numbers in array and be 18', () => {
      expect(arrays.addArr(numArr)).toBe(18);
    });
  });

  describe("concatArr concatinates 2 arrays", () => {
    it('should concatinate 2 arrays to not equal the first', () => {
      expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });
    it('should concatinate 2 arrays to not equal the second', () => {
      expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
    });
  })

  describe("cut3 removes item 3 from array", () => {
    it('should contain 3 items except rabbit', () => {
      expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
    });
    it('should not contain the third index rabbit', () => {
      expect(arrays.cut3(wordArr)).not.toContain('rabbit');
    });
  })


  describe("lgNum obtains the largest number in an array", () => {
    it('should have 6 be largest number', () => {
      expect(arrays.lgNum(numArr)).toEqual(6);
    });
    it('should not have a large number and be falsy', () => {
      expect(arrays.lgNum(wordArr)).toBeFalsy();
    });
  })
})


