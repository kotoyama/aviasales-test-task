import { root } from 'root'

import { SortType } from '../types'

export const sort = root.domain('sort')
export const sortTypeChanged = sort.event<SortType>()
