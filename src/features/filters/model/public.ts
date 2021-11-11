import { root } from '~/root'

import { Ticket } from '~/entities'

import { $filters } from './private'

export const filters = root.domain('filters-public')

export const $activeFiltersFn = $filters.map((items) => {
  const filters = items
    .slice(1)
    .filter(({ active }) => active)
    .map(({ predicate }) => predicate)
  return (ticket: Ticket) => filters.some((fn) => fn(ticket))
})
