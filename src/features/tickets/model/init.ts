import { forward, guard, sample } from 'effector'

import { $activeFilters } from '~/features/filters'
import { $activeSort } from '~/features/sort'

import {
  $limit,
  $cache,
  $loading,
  $searchId,
  $rawTickets,
  $canStartTimer,
  limitChanged,
  searchContinues,
  searchCompleted,
  loadTicketsFx,
  timerFx,
  CHUNK_SIZE,
} from './private'
import { loadSearchIdFx } from './public'

$searchId.on(loadSearchIdFx.doneData, (_, res) => res.body.searchId)
$rawTickets.on(searchContinues, (_, res) => res.body.tickets)
$loading.on(searchCompleted, () => false)

$limit
  .on(limitChanged, (limit) => limit + CHUNK_SIZE)
  .reset([$activeSort.updates, $activeFilters.updates])

forward({
  from: $searchId,
  to: loadTicketsFx,
})

sample({
  clock: [searchContinues, loadTicketsFx.fail],
  source: $searchId,
  target: loadTicketsFx,
})

guard({
  source: searchContinues,
  filter: $canStartTimer,
  target: timerFx,
})

guard({
  source: timerFx.done,
  filter: $loading,
  target: timerFx,
})

sample({
  clock: timerFx.done,
  source: $rawTickets,
  target: $cache,
})
