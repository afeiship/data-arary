import DataArray from '../src';

describe('take methods', () => {
  let arr: DataArray;

  beforeEach(() => {
    arr = new DataArray([1, 2, 3, 4, 5]);
  });

  // Test take() method
  test('should return the first n elements of the array', () => {
    expect(arr.take(2)).toEqual([1, 2]);
    expect(arr.take(0)).toEqual([]);
    expect(arr.take(5)).toEqual([1, 2, 3, 4, 5]);
    expect(arr.take(10)).toEqual([1, 2, 3, 4, 5]);
    expect(arr.take()).toEqual([1, 2, 3, 4, 5]);
  });

  // negative test cases
  test('negative test cases for take() method', () => {
    expect(arr.take(-1)).toEqual([5]);
    expect(arr.take(-2)).toEqual([4, 5]);
    expect(arr.take(-1000)).toEqual([1, 2, 3, 4, 5]);
  });
});
