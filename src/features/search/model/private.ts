import { attach } from 'effector'
import { root } from '~/root'

import { getTicketsReqFx } from '../api'

export const search = root.createDomain('search')
export const $searchId = search.createStore<string>('')

export const loadTicketsFx = attach({
  effect: getTicketsReqFx,
  source: $searchId,
})
