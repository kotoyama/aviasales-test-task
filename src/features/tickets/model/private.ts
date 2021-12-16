import { combine } from 'effector'
import { root } from '~/root'

import { TicketEntity } from '~/entities'
import { $filtersFn, $activeFilters } from '~/features/filters'
import { $activeSort } from '~/features/sorting'

import { CHUNK_SIZE, normalizeTickets } from '../lib'

export const tickets = root.domain('tickets')

export const $loading = tickets.store(true)
export const $limit = tickets.store(CHUNK_SIZE)
export const $rawTickets = tickets.store<TicketEntity[]>([])
export const $cache = tickets.store<TicketEntity[]>([])

export const limitChanged = tickets.event()

export const timerFx = root.effect({
  handler: <T>(data: T): Promise<T> =>
    new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000)
    }),
})

export const $tickets = $cache.map(normalizeTickets)
export const $firstChunkLoaded = $tickets.map((items) => items.length > 0)

export const $results = combine(
  $tickets,
  $filtersFn,
  $activeSort,
  (tickets, filtersFn, { comparator }) =>
    tickets.filter(filtersFn).sort(comparator),
)

export const $canStartTimer = combine(
  $loading,
  timerFx.pending,
  (loading, pending) => loading && !pending,
)

export const $canLoadMore = combine(
  $limit,
  $tickets,
  $results,
  $activeFilters,
  (limit, tickets, results, activeFilters) => {
    const target = activeFilters.length > 0 ? results : tickets
    return Math.ceil((target.length - limit) / CHUNK_SIZE) > 0
  },
)
