import { root } from 'root'

import { Ticket } from 'entities'

import { $filters } from './private'

export const filters = root.domain('filters-public')
export const filtersUpdated = filters.event<Ticket[]>()

export const $activatedFilters = $filters.map((items) =>
  items
    .slice(1)
    .reduce<number[]>(
      (acc, { active, stops }) => (!active ? acc : [...acc, stops]),
      [],
    ),
)
