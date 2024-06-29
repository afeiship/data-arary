import DataArray from '../src';

describe('clear methods', () => {
  test('clear method should remove all elements from the array', () => {
    const arr = new DataArray([1, 2, 3, 4, 5]);
    arr.clear();
    expect(arr.length).toBe(0);
  });
});
