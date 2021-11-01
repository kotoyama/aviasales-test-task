import { root } from 'root'

import { buttonGroup, SortType, SortButton } from '../types'

export const sort = root.domain('sort')

export const $buttonGroup = sort.store<SortButton[]>(Object.values(buttonGroup))
export const sortTypeChanged = sort.event<SortType>()

export const $sortType = $buttonGroup.map((tabs) =>
  tabs.reduce((acc, { id, active }) => (active ? id : acc), tabs[0].id),
)
