import { root } from '~/root'

import { Ticket } from '~/entities'

import { $filters } from './private'

export const filters = root.domain('filters-public')

export const $activeFilters = $filters.map((items) =>
  items.slice(1).filter(({ active }) => active),
)

export const $filtersFn = $activeFilters.map((items) => {
  const predicates = items.map(({ predicate }) => predicate)
  return (ticket: Ticket) => predicates.some((fn) => fn(ticket))
})
