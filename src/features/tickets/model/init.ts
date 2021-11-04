import { forward, guard, sample } from 'effector'

import {
  $loading,
  $tickets,
  $searchId,
  ticketsNormalized,
  ticketsUpdated,
  loadTicketsFx,
} from './private'
import { loadSearchIdFx } from './public'

const loadingContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$tickets.on(ticketsUpdated, (_, payload) => payload)
$loading.on(loadingStopped, () => false)

forward({
  from: $searchId,
  to: loadTicketsFx,
})

sample({
  source: $searchId,
  clock: [loadingContinues, loadTicketsFx.fail],
  target: loadTicketsFx,
})

sample({
  clock: loadTicketsFx.doneData,
  fn: (res) => res.body.tickets,
  target: ticketsNormalized,
})
