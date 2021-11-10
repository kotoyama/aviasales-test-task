import { attach, combine } from 'effector'
import { nanoid } from 'nanoid'
import { root } from '~/root'

import { Ticket, TicketEntity } from '~/entities'

import { $activatedFilters } from '~/features/filters'
import { $activeSort } from '~/features/sort'

import { getTicketsReqFx } from '../api'

const CHUNK_SIZE = 5

export const tickets = root.domain('tickets')

export const $loading = tickets.store(true)
export const $limit = tickets.store(CHUNK_SIZE)
export const $searchId = tickets.store<string>('')
export const $tickets = tickets.store<Ticket[]>([])

export const limitChanged = tickets.event()
export const ticketsUpdated = tickets.event<Ticket[]>()

export const $firstChunkLoaded = $tickets.map((items) => items.length > 0)

export const $canLoadMore = combine(
  $limit,
  $tickets,
  (limit, tickets) => Math.ceil((tickets.length - limit) / CHUNK_SIZE) > 0,
)

export const $results = combine(
  $tickets,
  $activeSort,
  $activatedFilters,
  (tickets, sort, filters) =>
    tickets
      .filter((item) => item.stops.every((stop) => filters.includes(stop)))
      .sort(sort.comparator),
)

export const ticketsNormalized = ticketsUpdated.prepend(
  (tickets: TicketEntity[]) =>
    tickets.map((item) => ({
      ...item,
      id: nanoid(),
      logo: `${process.env.PICS_CDN_URL}/${item.carrier}.png`,
      totalDuration: item.segments.reduce(
        (acc, { duration }) => acc + duration,
        0,
      ),
      stops: item.segments.reduce<number[]>(
        (acc, { stops }) => [...acc, stops.length],
        [],
      ),
    })),
)

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
