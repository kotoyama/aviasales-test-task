import { root } from 'root'

import { SortType } from '../types'

export const sort = root.domain('sort')

export const $sortType = sort.store<SortType>(SortType.FASTEST)
export const sortTypeChanged = sort.event<SortType>()
