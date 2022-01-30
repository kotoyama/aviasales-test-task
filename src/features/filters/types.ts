import { Ticket } from '~/shared/api'

export enum Transfer {
  ALL = -1,
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

export type FilterFn<T> = (item: T) => boolean

export interface Filter {
  type: Transfer
  label: string
  active: boolean
  predicate: FilterFn<Ticket>
}
