import { root } from '~/root'

import { sortGroup } from '../lib'
import { Sort, SortType } from '../types'

const sorting = root.createDomain('sorting')

export const $sortGroup = sorting.createStore<Sort[]>(sortGroup)
export const sortChanged = sorting.createEvent<SortType>()
