import { forward, guard, sample } from 'effector'

import { $searchId, $loading, ticketsUpdated, loadTicketsFx } from './private'
import { $tickets, loadSearchIdFx, normalizeTickets } from './public'

const loadingContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

$loading.on(loadingStopped, () => false)
$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$tickets.on(ticketsUpdated, (state, payload) => [...state, ...payload])

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
  target: normalizeTickets,
})
