import { forward, sample, split } from 'effector'

import { FilterType } from 'entities'

import {
  $filters,
  $everyFilterApplied,
  $allFilterActivated,
  filterChanged,
  checkAllFilter,
  toggleStopFilter,
  toggleAllFilter,
  toggleAllFilters,
} from './private'

$filters
  .on(toggleStopFilter, (filters, id) =>
    filters.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item,
    ),
  )
  .on(toggleAllFilter, (filters, active) =>
    filters.map((item) =>
      item.id === FilterType.ALL_TRANSFERS ? { ...item, active: active } : item,
    ),
  )
  .on(toggleAllFilters, (filters, active) =>
    filters.map((item) => ({ ...item, active: !active })),
  )

forward({
  from: $everyFilterApplied,
  to: toggleAllFilter,
})

split({
  source: filterChanged,
  match: {
    check: (id) => id === FilterType.ALL_TRANSFERS,
    toggle: (id) => id !== FilterType.ALL_TRANSFERS,
  },
  cases: {
    check: checkAllFilter,
    toggle: toggleStopFilter,
  },
})

sample({
  clock: checkAllFilter,
  source: $allFilterActivated,
  target: toggleAllFilters,
})
