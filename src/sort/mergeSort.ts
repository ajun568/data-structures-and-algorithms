const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr: number[], rightArr: number[]) => {
  let result: number[] = [];

  while (leftArr.length || rightArr.length) {
    if (leftArr.length && rightArr.length) {
      leftArr[0] < rightArr[0]
        ? result.push(leftArr.shift() as number)
        : result.push(rightArr.shift() as number);
    } else {
      if (leftArr.length) result.push(leftArr.shift() as number);
      if (rightArr.length) result.push(rightArr.shift() as number);
    }
  }

  return result;
}

export default mergeSort;
