export enum Transfer {
  ALL = -1,
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export interface Filter {
  label: string
  active: boolean
  stops: Transfer
}

export const filtersGroup: Filter[] = [
  {
    label: 'Все',
    active: true,
    stops: Transfer.ALL,
  },
  {
    label: 'Без пересадок',
    active: true,
    stops: Transfer.ZERO,
  },
  {
    label: '1 пересадка',
    active: true,
    stops: Transfer.ONE,
  },
  {
    label: '2 пересадки',
    active: true,
    stops: Transfer.TWO,
  },
  {
    label: '3 пересадки',
    active: true,
    stops: Transfer.THREE,
  },
]
