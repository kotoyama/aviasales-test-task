import { forward, guard, sample } from 'effector'

import { appLoadEnd } from 'features/results'
import { filtersUpdated } from 'features/filters'

import {
  $searchId,
  ticketsNormalized,
  ticketsUpdated,
  loadTicketsFx,
} from './private'
import { $tickets, loadSearchIdFx } from './public'

const loadingContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$tickets.on(ticketsUpdated, (_, payload) => payload)

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

forward({
  from: loadingStopped,
  to: appLoadEnd,
})

forward({
  from: ticketsUpdated,
  to: filtersUpdated,
})
