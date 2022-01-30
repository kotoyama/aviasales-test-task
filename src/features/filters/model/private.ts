import { root } from '~/root'

import { filterGroup } from '../lib'
import { Filter, Transfer } from '../types'

export const filters = root.createDomain('filters')

export const $filters = filters.createStore<Filter[]>(filterGroup)

export const filterChanged = filters.createEvent<Transfer>()
export const toggleStopsFilter = filters.createEvent<Transfer>()
export const toggleAllFilters = filters.createEvent<boolean>()
export const toggleAllFilter = filters.createEvent<boolean>()
export const checkAllFilter = filters.createEvent()

export const $everyFilterApplied = $filters.map((items) =>
  items.slice(1).every(({ active }) => active),
)

export const $allFilterActivated = $filters.map(
  (items) => items.find((item) => item.type === Transfer.ALL)?.active || false,
)
