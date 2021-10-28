export const sortBy = <T>(
  array: T[],
  param: keyof T,
  order: 'asc' | 'desc' = 'asc',
  sortFn = (a: T[keyof T], b: T[keyof T]): number => (a < b ? -1 : 1),
): T[] => {
  const compareFn = (a: T, b: T): number =>
    (order === 'desc' ? -1 : 1) * sortFn(a[param], b[param])
  return [...array].sort(compareFn)
}
