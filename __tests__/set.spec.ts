import DataArray from '../src';

describe('set methods', () => {
  test('set method should set a value at a given index', () => {
    const arr = new DataArray([1, 2, 4, 5, 6]);
    arr.set(2, 'a');
    expect(arr.values).toEqual([1, 2, 'a', 5, 6]);
  });
});
