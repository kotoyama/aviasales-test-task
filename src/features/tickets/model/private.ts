import { attach, combine } from 'effector'
import { nanoid } from 'nanoid'
import { root } from 'root'

import { $sortType, buttonGroup } from 'features/sort'
import { $activatedFilters } from 'features/filters'
import { sortBy } from 'lib/sortBy'

import { getTicketsReqFx } from '../api'
import { Ticket, TicketEntity } from '../types'

export const tickets = root.domain('tickets')

export const $tickets = tickets.store<Ticket[]>([])
export const $searchId = tickets.store<string>('')
export const $loading = tickets.store(true)

export const ticketsUpdated = tickets.event<Ticket[]>()

export const $firstBundleLoaded = $tickets.map((items) => items.length > 0)

export const $results = combine(
  $tickets,
  $sortType,
  $activatedFilters,
  (tickets, type, filters) => {
    const results = tickets.filter((item) =>
      item.stops.every((stop) => filters.includes(stop)),
    )
    return sortBy(results, buttonGroup[type].field)
  },
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
