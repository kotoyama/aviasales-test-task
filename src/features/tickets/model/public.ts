import { attach } from 'effector'
import { nanoid } from 'nanoid'
import { root } from 'root'

import { getSearchIdReqFx } from '../api'
import { Ticket, TicketEntity } from '../types'

export const tickets = root.domain('tickets-public')

export const $tickets = tickets.store<Ticket[]>([])

export const ticketsUpdated = tickets.event<Ticket[]>()

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
      stopsCount: ticket.segments.reduce<number[]>(
        (acc, { stops }) => [...acc, stops.length],
        [],
      ),
    })),
)

export const loadSearchIdFx = attach({
  effect: getSearchIdReqFx,
})
