import { attach } from 'effector'
import { root } from 'root'

import { getTicketsReqFx } from '../api'
import { Ticket } from '../types'

export const tickets = root.domain('tickets')

export const $tickets = tickets.store<Ticket[]>([])
export const $searchId = tickets.store<string>('')
export const $loading = tickets.store(true)

export const ticketsUpdated = tickets.event<Ticket[]>()

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
