// leetcode 76. 最小覆盖子串

export const minWindow = (s: string, t: string): string => {
  let subStr = '';
  let l = 0;
  let r = 0;
  const map = new Map();
  for (let i of t) {
    map.set(i, map.get(i) ? map.get(i) + 1 : 1);
  }
  let size = map.size;
  while (r < s.length) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1);
      if (map.get(s[r]) === 0) size -= 1;
    }
    while (size === 0) {
      let newStr = s.substring(l, r + 1);
      if (!subStr || newStr.length < subStr.length) subStr = newStr;
      if (map.has(s[l])) {
        map.set(s[l], map.get(s[l]) + 1);
        if (map.get(s[l]) === 1) size += 1;
      }
      l++;
    }
    r++;
  }
  return subStr;
}
