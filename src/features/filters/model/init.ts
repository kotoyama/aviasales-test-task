import { forward, sample, split } from 'effector'

import {
  $filters,
  $everyFilterApplied,
  $allFilterActivated,
  filterChanged,
  checkAllFilter,
  toggleStopsFilter,
  toggleAllFilter,
  toggleAllFilters,
} from './private'

$filters
  .on(toggleStopsFilter, (filters, stops) =>
    filters.map((item) =>
      item.stops === stops ? { ...item, active: !item.active } : item,
    ),
  )
  .on(toggleAllFilter, (filters, active) =>
    filters.map((item) =>
      item.stops === -1 ? { ...item, active: active } : item,
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
    check: (stops) => stops === -1,
    toggle: (stops) => stops !== -1,
  },
  cases: {
    check: checkAllFilter,
    toggle: toggleStopsFilter,
  },
})

sample({
  clock: checkAllFilter,
  source: $allFilterActivated,
  target: toggleAllFilters,
})
