import { attach } from 'effector'
import { nanoid } from 'nanoid'
import { root } from 'root'

import { Ticket, TicketEntity } from 'entities'

import { getTicketsReqFx } from '../api'

export const tickets = root.domain('tickets')

export const $searchId = tickets.store<string>('')
export const ticketsUpdated = tickets.event<Ticket[]>()

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
