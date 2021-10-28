import { Ticket } from 'features/tickets'

export enum SortType {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
  OPTIMAL = 'optimal',
}

type SortTypeMeta = {
  [key in SortType]: {
    field: keyof Ticket
    label: string
  }
}

export const sortTypeMeta: SortTypeMeta = {
  [SortType.FASTEST]: {
    field: 'totalDuration',
    label: 'Самый быстрый',
  },
  [SortType.CHEAPEST]: {
    field: 'price',
    label: 'Самый дешёвый',
  },
  [SortType.OPTIMAL]: {
    field: 'stopsCount',
    label: 'Оптимальный',
  },
}
