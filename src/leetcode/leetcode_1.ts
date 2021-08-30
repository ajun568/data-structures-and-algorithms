// leetcode 1. 两数之和

export const twoSum = (
  nums: number[], target: number
): number[] => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let find = target - nums[i];
    if (map.has(find)) {
      return [map.get(find), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}