import { root } from 'root'

import { SortType } from 'entities'

export const sort = root.domain('sort')
export const sortTypeChanged = sort.event<SortType>()
