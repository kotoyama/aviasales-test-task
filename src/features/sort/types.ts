import { Ticket } from 'features/tickets'

export enum SortType {
  FASTEST = 'fastest',
  CHEAPEST = 'cheapest',
  OPTIMAL = 'optimal',
}

export interface SortButton {
  id: SortType
  label: string
  active: boolean
  field: keyof Ticket
}

type SortGroup = {
  [key in SortType]: SortButton
}

export const buttonGroup: SortGroup = {
  [SortType.FASTEST]: {
    id: SortType.FASTEST,
    label: 'Самый быстрый',
    field: 'totalDuration',
    active: true,
  },
  [SortType.CHEAPEST]: {
    id: SortType.CHEAPEST,
    label: 'Самый дешёвый',
    field: 'price',
    active: false,
  },
  [SortType.OPTIMAL]: {
    id: SortType.OPTIMAL,
    label: 'Оптимальный',
    field: 'stops',
    active: false,
  },
}
