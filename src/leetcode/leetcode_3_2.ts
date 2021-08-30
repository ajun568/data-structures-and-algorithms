// leetcode 3. 无重复字符的最长子串
// 滑动窗口

export const lengthOfLongestSubstring = (str: string): number => {
  let l = 0;
  let len = 0;
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i]) && map.get(str[i]) >= l) {
      l = map.get(str[i]) + 1;
    }

    map.set(str[i], i);
    len = Math.max(len, i - l + 1);
    console.log(len, l, map)
  }
  return len;
}
