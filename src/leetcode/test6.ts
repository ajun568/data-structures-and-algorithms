// 239. 滑动窗口最大值
// test6~8
// 测试用例超时
const maxSlidingWindow = (nums: number[], k: number) => {
  let queue: number[] = [];
  let maxArr: number[] = [];
  nums.forEach(item => {
    if (queue.length <= k) {
      queue.push(item);
    }
    if (queue.length === k) {
      let max = queue[0];
      for (let i = 1; i < queue.length; i++) {
        if (queue[i] > max) max = queue[i];
      }
      maxArr.push(max);
      queue.shift();
    }
  })
  return maxArr;
}

export default maxSlidingWindow;
