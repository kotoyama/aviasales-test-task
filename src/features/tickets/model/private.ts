import { attach } from 'effector'
import { root } from 'root'

import { getTicketsReqFx } from '../api'

export const tickets = root.domain('tickets')

export const $searchId = tickets.store<string>('')
export const $loading = tickets.store(true)

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
