// 239. 滑动窗口最大值
// test6~8
// 测试用例超时, test6的优化版
const maxSlidingWindow = (nums: number[], k: number) => {
  let queue: number[] = [];
  let maxArr: number[] = [];
  let maxFlag: number = -Infinity;

  nums.forEach(item => {
    if (queue.length <= k) {
      if (item > maxFlag) maxFlag = item;
      queue.push(item);
    }
    if (queue.length === k) {
      maxArr.push(maxFlag);
      if (maxFlag === queue.shift()) {
        maxFlag = -Infinity;
        for (let i = 0; i < queue.length; i++) {
          if (queue[i] > maxFlag) maxFlag = queue[i];
        }
      }
    }
  })
  return maxArr;
}

export default maxSlidingWindow;
