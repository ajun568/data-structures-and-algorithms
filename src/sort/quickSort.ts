const quickSort = (arr: number[]): number[] => {
  if (!arr.length) return [];

  let leftArr: number[] = [];
  let rightArr: number[] = [];
  let middle = arr.splice(Math.floor(arr.length / 2), 1)[0];
  
  arr.forEach(item => {
    item < middle ? leftArr.push(item) : rightArr.push(item);
  })

  return quickSort(leftArr).concat(middle, quickSort(rightArr));
}

export default quickSort;
