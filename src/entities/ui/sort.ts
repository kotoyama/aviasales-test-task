import { Ticket } from '../api'

export enum Score {
  PRICE = 1,
  HOUR = 100,
  STOP = 500,
}

export enum SortType {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
  OPTIMAL = 'optimal',
}

export type SortFn<T> = (a: T, b: T) => number

export interface Sort {
  label: string
  active: boolean
  type: SortType
  comparator: SortFn<Ticket>
}
