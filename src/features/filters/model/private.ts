import { root } from 'root'

import { Filter, FilterType, initFilters } from '../types'

export const filters = root.domain('filters')

export const $filters = filters.store<Filter[]>(initFilters)

export const filterChanged = filters.event<string>()
export const toggleStopFilter = filters.event<string>()
export const toggleAllFilters = filters.event<boolean>()
export const toggleAllFilter = filters.event<boolean>()
export const checkAllFilter = filters.event()

export const $everyFilterApplied = $filters.map((items) =>
  items.slice(1).every(({ active }) => active),
)

export const $allFilterActivated = $filters.map((items) => {
  const allFilter = items.find((item) => item.id === FilterType.ALL_TRANSFERS)
  return allFilter?.active || false
})