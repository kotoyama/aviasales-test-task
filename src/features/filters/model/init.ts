import { forward, sample, split } from 'effector'

import { Transfer } from '~/shared/entities'

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
  .on(toggleStopsFilter, (filters, type) =>
    filters.map((item) =>
      item.type === type ? { ...item, active: !item.active } : item,
    ),
  )
  .on(toggleAllFilter, (filters, active) =>
    filters.map((item) =>
      item.type === Transfer.ALL ? { ...item, active: active } : item,
    ),
  )
  .on(toggleAllFilters, (filters, active) =>
    filters.map((item) => ({ ...item, active: !active })),
  )

/** @description Тогглим фильтр «Все»
 * при обновлении стора, который следит
 * за состоянием всех остальных фильтров */
forward({
  from: $everyFilterApplied,
  to: toggleAllFilter,
})

/** @description В зависимости от типа фильтра решаем,
 * какое из событий будет вызвано:
 * - Фильтр «Все»: тогглим все фильтры
 * - Фильтр «N пересадок»: тогглим соответствующий фильтр */
split({
  source: filterChanged,
  match: {
    check: (type) => type === Transfer.ALL,
    toggle: (type) => type !== Transfer.ALL,
  },
  cases: {
    check: checkAllFilter,
    toggle: toggleStopsFilter,
  },
})

/** @description Тогглим все фильтры
 * при клике на фильтр «Все» */
sample({
  clock: checkAllFilter,
  source: $allFilterActivated,
  target: toggleAllFilters,
})
