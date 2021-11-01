import { attach, combine } from 'effector'
import { nanoid } from 'nanoid'
import { root } from 'root'

import { $sortType, buttonGroup } from 'features/sort'
import { sortBy } from 'lib/sortBy'

import { getTicketsReqFx } from '../api'
import { Ticket, TicketEntity } from '../types'

export const tickets = root.domain('tickets')

export const $tickets = tickets.store<Ticket[]>([])
export const $searchId = tickets.store<string>('')
export const $loading = tickets.store(true)

export const ticketsUpdated = tickets.event<Ticket[]>()

export const $results = combine($tickets, $sortType, (tickets, type) =>
  sortBy(tickets, buttonGroup[type].field),
)

export const ticketsNormalized = ticketsUpdated.prepend(
  (tickets: TicketEntity[]) =>
    tickets.map((ticket) => ({
      ...ticket,
      id: nanoid(),
      logo: `${process.env.PICS_CDN_URL}/${ticket.carrier}.png`,
      totalDuration: ticket.segments.reduce(
        (acc, { duration }) => acc + duration,
        0,
      ),
      stops: ticket.segments.reduce<number[]>(
        (acc, { stops }) => [...acc, stops.length],
        [],
      ),
    })),
)

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
