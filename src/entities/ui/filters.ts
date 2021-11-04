export interface Filter {
  label: string
  active: boolean
  stops: number
}

export const filtersGroup: Filter[] = [
  {
    label: 'Все',
    active: true,
    stops: -1,
  },
  {
    label: 'Без пересадок',
    active: true,
    stops: 0,
  },
  {
    label: '1 пересадка',
    active: true,
    stops: 1,
  },
  {
    label: '2 пересадки',
    active: true,
    stops: 2,
  },
  {
    label: '3 пересадки',
    active: true,
    stops: 3,
  },
]
