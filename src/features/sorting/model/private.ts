import { root } from '~/root'

import { SortType, Sort } from '~/shared/entities'

import { sortGroup } from '../lib'

const sorting = root.domain('sort')

export const $sortGroup = sorting.store<Sort[]>(sortGroup)
export const sortChanged = sorting.event<SortType>()
