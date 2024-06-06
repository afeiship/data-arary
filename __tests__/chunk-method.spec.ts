import DataArray from '../src';

describe('chunk usage', () => {
  test('should chunk an array into smaller arrays', () => {
    const arr = new DataArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const chunks = arr.chunk(3);
    expect(chunks.length).toBe(4);
    expect(chunks[0]).toEqual([1, 2, 3]);
    expect(chunks[1]).toEqual([4, 5, 6]);
    expect(chunks[2]).toEqual([7, 8, 9]);
    expect(chunks[3]).toEqual([10]);
  });

  // test negative chunk size
  test('should throw an error when chunk size is negative', () => {
    const arr = new DataArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const chunks = arr.chunk(-3);
    expect(chunks.length).toBe(0);
  });

  // test chunk size greater than array length
  test('should throw an error when chunk size is greater than array length', () => {
    const arr = new DataArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const chunks = arr.chunk(15);
    expect(chunks.length).toBe(1);
    expect(chunks[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
