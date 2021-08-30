// leetcode 3. 无重复字符的最长子串

export const lengthOfLongestSubstring = (str: string): number => {
  let len: number[] = [];
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      len.push(map.size);
      let findIndex = map.get(str[i]);
      let entries = [...map.entries()];
      map.clear();

      entries.forEach(item => {
        if (item[1] > findIndex) {
          map.set(...item);
        }
      })
      map.set(str[i], i);
    } else {
      map.set(str[i], i);
    }
  }
  len.push(map.size);
  return Math.max(...len);
}
