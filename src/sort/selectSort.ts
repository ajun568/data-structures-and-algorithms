const selectSort = (arr: number[]) => {
  let minIndex: number;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

export default selectSort;
