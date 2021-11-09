import { forward, sample, split } from 'effector'

import { Transfer } from '~/entities'

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
      item.stops === Transfer.ALL ? { ...item, active: active } : item,
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
    check: (stops) => stops === Transfer.ALL,
    toggle: (stops) => stops !== Transfer.ALL,
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
