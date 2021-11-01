import { root } from 'root'

import { Filter, initFilters } from '../types'

export const filters = root.domain('filters')
export const $filters = filters.store<Filter[]>(initFilters)
