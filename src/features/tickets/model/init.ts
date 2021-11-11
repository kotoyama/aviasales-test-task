import { forward, guard, sample } from 'effector'

import { $activeFiltersFn } from '~/features/filters'
import { $activeSort } from '~/features/sort'

import {
  $limit,
  $loading,
  $tickets,
  $searchId,
  limitChanged,
  ticketsUpdated,
  ticketsNormalized,
  loadTicketsFx,
  CHUNK_SIZE,
} from './private'
import { loadSearchIdFx } from './public'

const loadingContinues = guard(loadTicketsFx.doneData, {
  filter: (res) => !res.body.stop,
})

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: (res) => res.body.stop,
})

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$tickets.on(ticketsUpdated, (_, tickets) => tickets)
$loading.on(loadingStopped, () => false)

$limit
  .on(limitChanged, (limit) => limit + CHUNK_SIZE)
  .reset([$activeSort.updates, $activeFiltersFn.updates])

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
