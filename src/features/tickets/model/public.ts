import { attach } from 'effector'
import { root } from 'root'

import { Ticket } from 'entities'

import { getSearchIdReqFx } from '../api'

export const tickets = root.domain('tickets-public')
export const $tickets = tickets.store<Ticket[]>([])

export const loadSearchIdFx = attach({
  effect: getSearchIdReqFx,
})
