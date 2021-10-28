import { guard, sample } from 'effector'

import { sortBy } from 'lib/sortBy'
import { $tickets, ticketsUpdated, ticketsNormalized } from 'features/tickets'

import { $sortType, sortTypeChanged } from './private'
import { sortTypeMeta } from '../types'

$sortType.on(sortTypeChanged, (_, payload) => payload)

sample({
  clock: guard({
    clock: ticketsNormalized,
    filter: (tickets) => tickets.length > 0,
  }),
  source: $sortType,
  target: sortTypeChanged,
})

sample({
  clock: sortTypeChanged,
  source: $tickets,
  fn: (tickets, type) => sortBy(tickets, sortTypeMeta[type].field),
  target: ticketsUpdated,
})
