import { plural } from 'lib/plural'

import { FilterType } from '../types'
import { $filters } from './private'
import { filtersUpdated } from './public'

$filters.on(filtersUpdated, (filters, tickets) =>
  tickets.reduce(
    (acc, ticket) => {
      const stops = ticket.segments.reduce<number[]>(
        (count, { stops }) => [...count, stops.length],
        [],
      )
      const filterExists = stops.every((item) =>
        acc.find((filter) => filter.stops === item),
      )
      if (filterExists) return acc
      stops.forEach((item) => {
        if (acc[item + 1]) return
        acc[item + 1] = {
          id: item ? FilterType.WITH_TRANSFERS : FilterType.WITHOUT_TRANSFERS,
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
