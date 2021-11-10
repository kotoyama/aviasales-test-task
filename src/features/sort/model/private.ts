import { root } from '~/root'

import { SortType, Sort } from '~/entities'

import { sortGroup } from '../lib'

const sort = root.domain('sort')

export const $sortGroup = sort.store<Sort[]>(sortGroup)
export const sortChanged = sort.event<SortType>()
