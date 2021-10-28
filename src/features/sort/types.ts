export enum SortType {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
  OPTIMAL = 'optimal',
}

export const metaSortType = {
  [SortType.FASTEST]: 'Самый быстрый',
  [SortType.CHEAPEST]: 'Самый дешёвый',
  [SortType.OPTIMAL]: 'Оптимальный',
}
