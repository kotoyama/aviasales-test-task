import { root } from 'root'

import { $filters } from './private'

export const filters = root.domain('filters-public')

export const $activatedFilters = $filters.map((items) =>
  items
    .slice(1)
    .reduce<number[]>(
      (acc, { active, stops }) => (!active ? acc : [...acc, stops]),
      [],
    ),
)
