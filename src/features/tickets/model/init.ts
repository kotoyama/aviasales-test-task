import { guard, sample } from 'effector'

import { searchCompleted, searchContinues } from '~/features/search'
import { $activeFilters } from '~/features/filters'
import { $activeSort } from '~/features/sort'

import {
  $limit,
  $cache,
  $loading,
  $rawTickets,
  $canStartTimer,
  limitChanged,
  timerFx,
  CHUNK_SIZE,
} from './private'

$rawTickets.on([searchContinues, searchCompleted], (_, res) => res.body.tickets)
$loading.on(searchCompleted, () => false)

$limit
  .on(limitChanged, (limit) => limit + CHUNK_SIZE)
  .reset([$activeSort.updates, $activeFilters.updates])

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
