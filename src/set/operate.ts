export const unionSet = (
  set1: Set<unknown>, set2: Set<unknown>
) => {
  return new Set([...set1, ...set2]);
}

export const intersection = (
  set1: Set<unknown>, set2: Set<unknown>
) => {
  return new Set(
    [...set1].filter(
      item => set2.has(item)
    )
  );
}

export const difference = (
  set1: Set<unknown>, set2: Set<unknown>
) => {
  return new Set(
    [...set1].filter(
      item => !set2.has(item)
    )
  );
}

export const subSet = (
  set1: Set<unknown>, set2: Set<unknown>
) => {
  for (let item of set1) {
    if (!set2.has(item)) return false;
  }
  return true;
}
