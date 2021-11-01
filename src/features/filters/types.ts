export enum FilterType {
  ALL_TRANSFERS = 'all transfers',
  WITHOUT_TRANSFERS = 'without transfers',
  WITH_TRANSFERS = 'with transfers',
}

export interface Filter {
  id: FilterType
  label: string
  active: boolean
  stops: number
}

export const initFilters: Filter[] = [
  {
    id: FilterType.ALL_TRANSFERS,
    label: 'Все',
    active: true,
    stops: -1,
  },
]
