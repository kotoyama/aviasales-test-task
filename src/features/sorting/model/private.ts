import { root } from '~/root'

import { sortGroup } from '../lib'
import { Sort, SortType } from '../types'

const sorting = root.domain('sort')

export const $sortGroup = sorting.store<Sort[]>(sortGroup)
export const sortChanged = sorting.event<SortType>()
