export interface DataArrayOptions {
  onChange?: (data: any[]) => void;
  continuous?: boolean;
}

const simpleDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj));

class DataArray {
  private data: any[];
  private options: DataArrayOptions;

  constructor(data: any[], options?: any) {
    this.data = data;
    this.options = options || {};
  }

  public setData(data: any[]) {
    this.data = data;
    this.options.onChange?.(this.data);
  }

  public setOptions(options: DataArrayOptions) {
    this.options = options;
  }

  get length(): number {
    return this.data.length;
  }

  get keys(): number[] {
    return this.data.map((_, index) => index);
  }

  get values() {
    return this.data;
  }

  get isEmpty() {
    return this.data.length === 0;
  }

  get(index?: number) {
    if (index === undefined) return this.data;
    if (index >= this.data.length) return undefined;
    if (index < 0) return this.data[this.data.length + index];
    return this.data[index];
  }

  first() {
    return this.isEmpty ? undefined : this.data[0];
  }

  last() {
    return this.isEmpty ? undefined : this.data[this.data.length - 1];
  }

  chunk(chunkSize: number) {
    const chunks: any[] = [];
    if (chunkSize <= 0) return chunks;
    for (let i = 0; i < this.data.length; i += chunkSize) {
      chunks.push(this.data.slice(i, i + chunkSize));
    }
    return chunks;
  }

  merge(data: any[]) {
    this.data = this.data.concat(data);
    this.options.onChange?.(this.data);
  }

  clear() {
    this.data = [];
    this.options.onChange?.(this.data);
  }

  copy(isDeep?: boolean) {
    const data = isDeep ? simpleDeepCopy(this.data) : this.data;
    return new DataArray(data, this.options);
  }

  toggle(element: any) {
    const index = this.indexOf(element);
    if (index === -1) {
      this.push(element);
    } else {
      this.remove(index);
    }
  }

  remove(index: number) {
    this.splice(index, 1);
    this.options.onChange?.(this.data);
  }

  insert(index: number, element: any) {
    this.splice(index, 0, element);
    this.options.onChange?.(this.data);
  }

  has(element: any) {
    return this.data.includes(element);
  }

  indexOf(element: any) {
    return this.data.indexOf(element);
  }

  // ------------ methods with `onChange` option --------------
  push(element: any) {
    this.data.push(element);
    this.options.onChange?.(this.data);
  }

  pop() {
    this.data.pop();
    this.options.onChange?.(this.data);
  }

  unshift(element: any) {
    this.data.unshift(element);
    this.options.onChange?.(this.data);
  }

  shift() {
    this.data.shift();
    this.options.onChange?.(this.data);
  }

  splice(start: number, deleteCount?: number, item?: any) {
    this.data.splice(start, deleteCount || 0, item);
    this.options.onChange?.(this.data);
  }

  sort(compareFn?: (a: any, b: any) => number) {
    this.data.sort(compareFn);
    this.options.onChange?.(this.data);
  }

  reverse() {
    this.data.reverse();
    this.options.onChange?.(this.data);
  }

  swap(indexA: number, indexB: number) {
    if (this.length <= 1) return;
    if (indexA === indexB) return;
    const temp = this.data[indexA];
    this.data[indexA] = this.data[indexB];
    this.data[indexB] = temp;
    this.options.onChange?.(this.data);
  }

  swapEdge() {
    if (this.length <= 1) return;
    this.swap(0, this.length - 1);
  }

  // to top
  upEdge(index: number) {
    if (this.length <= 1) return;
    if (index === 0) return;
    if (index > this.length - 1) return;
    const element = this.data.splice(index, 1)[0];
    this.data.unshift(element);
    this.options.onChange?.(this.data);
  }

  // to bottom
  downEdge(index: number) {
    if (this.length <= 1) return;
    if (index === this.length - 1) return;
    if (index < 0) return;
    const element = this.data.splice(index, 1)[0];
    this.data.push(element);
    this.options.onChange?.(this.data);
  }

  up(index: number) {
    const { continuous } = this.options;
    if (this.length <= 1) return;
    if (!continuous && index === 0) return;
    if (index === 0) {
      const first = this.first();
      this.data.shift();
      this.data.push(first);
      this.options.onChange?.(this.data);
      return;
    }
    this.swap(index, index - 1);
  }

  down(index: number) {
    const { continuous } = this.options;
    if (this.length <= 1) return;
    if (!continuous && index === this.length - 1) return;
    if (index === this.length - 1) {
      const last = this.last();
      this.data.pop();
      this.data.unshift(last);
      this.options.onChange?.(this.data);
      return;
    }
    this.swap(index, index + 1);
  }
}

export default DataArray;
