export enum FilterType {
  ALL_TRANSFERS = 'all transfers',
  WITHOUT_TRANSFERS = 'without transfers',
  WITH_TRANSFERS = 'with transfers',
}

export interface Filter {
  id: string
  type: FilterType
  label: string
  active: boolean
  stops: number
}

export const initFilters: Filter[] = [
  {
    id: FilterType.ALL_TRANSFERS,
    type: FilterType.ALL_TRANSFERS,
    label: 'Все',
    active: true,
    stops: -1,
  },
  {
    id: FilterType.WITHOUT_TRANSFERS,
    type: FilterType.WITHOUT_TRANSFERS,
    label: 'Без пересадок',
    active: true,
    stops: 0,
  },
  {
    id: FilterType.WITH_TRANSFERS,
    type: FilterType.WITH_TRANSFERS,
    label: '1 пересадка',
    active: true,
    stops: 1,
  },
  {
    id: FilterType.WITH_TRANSFERS,
    type: FilterType.WITH_TRANSFERS,
    label: '2 пересадки',
    active: true,
    stops: 2,
  },
  {
    id: FilterType.WITH_TRANSFERS,
    type: FilterType.WITH_TRANSFERS,
    label: '3 пересадки',
    active: true,
    stops: 3,
  },
]
