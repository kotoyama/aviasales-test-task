import { attach } from 'effector'
import { root } from '~/root'

import { getTicketsReqFx } from '../api'

export const search = root.domain('search')

export const $searchId = search.store<string>('')

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
