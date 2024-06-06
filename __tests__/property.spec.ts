import DataArray from '../src';

describe('base properties', () => {
  test('length property', () => {
    const array = [1, 2, 3];
    const dataArray = new DataArray(array);
    expect(dataArray.length).toBe(3);
  });

  test('keys property', () => {
    const array = [1, 2, 3];
    const dataArray = new DataArray(array);
    expect(dataArray.keys).toEqual([0, 1, 2]);
  });

  test('values property', () => {
    const array = [1, 2, 3];
    const dataArray = new DataArray(array);
    expect(dataArray.values).toEqual([1, 2, 3]);
  });

  // isEmpty

  test('isEmpty property: not empty', () => {
    const array = [1, 2, 3];
    const dataArray = new DataArray(array);
    expect(dataArray.isEmpty).toBe(false);
  });

  test('isEmpty property: empty', () => {
    const array = [];
    const dataArray = new DataArray(array);
    expect(dataArray.isEmpty).toBe(true);
  })
});
