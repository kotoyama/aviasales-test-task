import { attach } from 'effector'
import { root } from 'root'

import { getSearchIdReqFx } from '../api'

export const tickets = root.domain('tickets-public')

export const loadSearchIdFx = attach({
  effect: getSearchIdReqFx,
})
