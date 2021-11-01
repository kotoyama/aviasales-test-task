import { guard, sample } from 'effector'

import { sortBy } from 'lib/sortBy'
import { $tickets, ticketsUpdated, ticketsNormalized } from 'features/tickets'

import { $sortType, $buttonGroup, sortTypeChanged } from './private'
import { buttonGroup } from '../types'

$buttonGroup.on(sortTypeChanged, (buttons, type) =>
  buttons.map((item) => ({ ...item, active: item.id === type })),
)

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
  fn: (tickets, type) => sortBy(tickets, buttonGroup[type].field),
  target: ticketsUpdated,
})
