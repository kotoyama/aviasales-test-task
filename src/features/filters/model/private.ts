import { root } from '~/root'

import { Filter, Transfer, filtersGroup } from '~/entities'

export const filters = root.domain('filters')

export const $filters = filters.store<Filter[]>(filtersGroup)

export const filterChanged = filters.event<Transfer>()
export const toggleStopsFilter = filters.event<Transfer>()
export const toggleAllFilters = filters.event<boolean>()
export const toggleAllFilter = filters.event<boolean>()
export const checkAllFilter = filters.event()

export const $everyFilterApplied = $filters.map((items) =>
  items.slice(1).every(({ active }) => active),
)

export const $allFilterActivated = $filters.map((items) => {
  const allFilter = items.find((item) => item.stops === Transfer.ALL)
  return allFilter?.active || false
})
