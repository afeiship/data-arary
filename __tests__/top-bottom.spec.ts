import DataArray from '../src';

describe('top/bottom properties', () => {
  test('Top method', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    data.top(2);
    expect(data.values).toEqual([3, 1, 2, 4, 5]);
  });


  test('Bottom method', () => {
    const data = new DataArray([1, 2, 3, 4, 5]);
    data.bottom(2);
    expect(data.values).toEqual([1, 2, 4, 5, 3]);
  });

  test('Top exception case', () => {
    const data1 = new DataArray([1]);
    const data2 = new DataArray([]);
    const data3 = new DataArray([1, 2]);
    // top
    data1.top(2);
    expect(data1.values).toEqual([1]);
    data2.top(2);
    expect(data2.values).toEqual([]);
    data3.top(2);
    expect(data3.values).toEqual([1, 2]);
  });
});
