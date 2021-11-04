import { combine } from 'effector'
import { root } from 'root'

import { buttonGroup } from 'entities'
import { sortBy } from 'lib/sortBy'

import { $sortType } from '../../sort/model'
import { $tickets } from '../../tickets/model'
import { $activatedFilters } from '../../filters/model'

export const results = root.domain('results-public')

export const appLoadEnd = results.event()
export const $loading = results.store(true)

export const $firstBundleLoaded = $tickets.map((items) => items.length > 0)

export const $results = combine(
  $tickets,
  $sortType,
  $activatedFilters,
  (tickets, type, filters) => {
    const results = tickets.filter((item) =>
      item.stops.every((stop) => filters.includes(stop)),
    )
    return sortBy(results, buttonGroup[type].field)
  },
)
