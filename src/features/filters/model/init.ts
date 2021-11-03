import { forward, sample, split } from 'effector'

import { plural } from 'lib/plural'
import { FilterType } from 'entities'

import { filtersUpdated } from './public'
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
  .on(filtersUpdated, (filters, tickets) =>
    tickets.reduce(
      (acc, ticket) => {
        const filterExists = ticket.stops.every((item) =>
          acc.find((filter) => filter?.stops === item),
        )
        if (filterExists) return acc
        ticket.stops.forEach((item) => {
          if (acc[item + 1]) return
          acc[item + 1] = {
            id: `${item} transfers`,
            type: item
              ? FilterType.WITH_TRANSFERS
              : FilterType.WITHOUT_TRANSFERS,
            label: plural(
              item,
              ['пересадка', 'пересадки', 'пересадок'],
              'Без пересадок',
            ),
            active: true,
            stops: item,
          }
        })
        return acc
      },
      [...filters],
    ),
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
