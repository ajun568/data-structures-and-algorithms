// 349. 两个数组的交集

const intersection = (
  nums1: number[], nums2: number[]
): number[] => {
  return [
    ...new Set(
      nums1.filter(item => nums2.includes(item))
    )
  ];
}

export default intersection;
