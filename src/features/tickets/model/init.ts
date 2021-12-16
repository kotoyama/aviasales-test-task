import { guard, sample } from 'effector'

import { searchCompleted, searchContinues } from '~/features/search'
import { $activeFilters } from '~/features/filters'
import { $activeSort } from '~/features/sorting'

import {
  $limit,
  $cache,
  $loading,
  $rawTickets,
  $canStartTimer,
  limitChanged,
  timerFx,
} from './private'
import { CHUNK_SIZE } from '../lib'

$rawTickets.on([searchContinues, searchCompleted], (_, res) => res.body.tickets)
$loading.on(searchCompleted, () => false)

$limit
  .on(limitChanged, (limit) => limit + CHUNK_SIZE)
  .reset([$activeSort.updates, $activeFilters.updates])

/** @description Блокируем запуск аналогичного таймера,
 * если он уже был запущен, иначе - запускаем */
guard({
  source: searchContinues,
  filter: $canStartTimer,
  target: timerFx,
})

/** @description Зацикливаем выполнение таймера
 * пока поиск продолжается */
guard({
  source: timerFx.done,
  filter: $loading,
  target: timerFx,
})

/** @description Кэшируем билеты при первом удачном
 * ответе сервера и далее по интервалу */
sample({
  clock: timerFx.done,
  source: $rawTickets,
  target: $cache,
})
