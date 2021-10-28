import { createApi, guard, sample, split } from 'effector'

import { $tickets, normalizeTickets } from 'features/tickets'

import { $sortType, sortTypeChanged } from './private'
import { SortType } from '../types'

$sortType.on(sortTypeChanged, (_, payload) => payload)

split({
  source: sortTypeChanged,
  match: {
    optimal: (type) => type === SortType.OPTIMAL,
    fastest: (type) => type === SortType.FASTEST,
  },
  cases: createApi($tickets, {
    optimal: (tickets) =>
      tickets.sort((curr, next) =>
        curr.stopsCount > next.stopsCount ? 1 : -1,
      ),
    fastest: (tickets) =>
      tickets.sort((curr, next) =>
        curr.totalDuration > next.totalDuration ? 1 : -1,
      ),
    __: (tickets) =>
      tickets.sort((curr, next) => (curr.price > next.price ? 1 : -1)),
  }),
})

sample({
  clock: guard({
    clock: normalizeTickets,
    filter: (tickets) => tickets.length > 0,
  }),
  source: $sortType,
  target: sortTypeChanged,
})
