import { root } from '~/root'

import { Filter, Transfer } from '~/shared/entities'

import { filterGroup } from '../lib'

export const filters = root.domain('filters')

export const $filters = filters.store<Filter[]>(filterGroup)

export const filterChanged = filters.event<Transfer>()
export const toggleStopsFilter = filters.event<Transfer>()
export const toggleAllFilters = filters.event<boolean>()
export const toggleAllFilter = filters.event<boolean>()
export const checkAllFilter = filters.event()

export const $everyFilterApplied = $filters.map((items) =>
  items.slice(1).every(({ active }) => active),
)

export const $allFilterActivated = $filters.map(
  (items) => items.find((item) => item.type === Transfer.ALL)?.active || false,
)
