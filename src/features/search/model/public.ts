import { attach, guard } from 'effector'

import { getSearchIdReqFx } from '../api'
import { loadTicketsFx } from './private'

export const searchContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

export const searchCompleted = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

export const loadSearchIdFx = attach({
  effect: getSearchIdReqFx,
})
